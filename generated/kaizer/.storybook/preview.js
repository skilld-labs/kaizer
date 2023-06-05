import '../color/colors.css';
import '../css/styles.src.css';
import svgSprite from '../images/sprite.svg';
import breakpoints from '../kaizer.breakpoints.yml';
import Twig from 'twig';
import { addDrupalExtensions } from 'drupal-twig-extensions/twig';
import DrupalAttributes from 'drupal-attribute';
import once from '@drupal/once';
import { importAssets, getYmlData } from './plugins/story-handler';

window.once = once;
addDrupalExtensions(Twig, {
  // Optionally, set options to configure how the Drupal
});
const allTwigPatternTemplates = import.meta.glob(
  '../templates/components/**/*.html.twig',
  { as: 'raw', import: 'default', eager: true },
);

importAssets();

// here we initiate all twig templates to save them in cache of Twig.Templates.registry
// and get by reference in render of story-handler.js
const namespaces = [
  '../templates/components/layouts',
  '../templates/components/suggestions',
  '../templates/components/theme',
  '../templates/components/ui_patterns',
  '../templates/components/storybook',
];

for (const [path, data] of Object.entries(allTwigPatternTemplates)) {
  Twig.twig({
    attributes: new DrupalAttributes(),
    id: path.replace(
      namespaces.filter((a) => path.includes(a))[0],
      '@component',
    ),
    data: data,
    allowInlineIncludes: true,
  });
}

const kaizerBreakpoints = Object.keys(breakpoints).reduce(
  (a, i) =>
    Object.assign(a, {
      [i.split('.').pop()]: breakpoints[i].mediaQuery,
    }),
  {},
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  AllArgTypes: getYmlData(),
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // Maybe load only Twig.Template.Registry somehow here.
  Twig: { ...Twig },
  backgrounds: {
    values: [{ name: 'grey', value: '#eee' }],
  },
  options: {
    storySort: (a, b) => {
      if (a.id.startsWith('templates') && b.id.startsWith('pages')) {
        return -1;
      }
      return a.id === b.id
        ? 0
        : a.id.localeCompare(b.id, undefined, { numeric: true });
    },
  },
};

window.Drupal = {
  behaviors: {},
};
window.drupalSettings = {
  kaizerSvgSprite: svgSprite,
  kaizerBreakpoints,
};

((Drupal, drupalSettings) => {
  document.addEventListener('DOMContentLoaded', () => {
    Drupal.t = function (str) {
      return str;
    };

    Drupal.throwError = function (error) {
      setTimeout(function () {
        throw error;
      }, 0);
    };

    Drupal.attachBehaviors = function (context, settings) {
      context = context || document;
      settings = settings || drupalSettings;
      const behaviors = Drupal.behaviors;
      // Execute all of them.
      Object.keys(behaviors || {}).forEach((i) => {
        if (typeof behaviors[i].attach === 'function') {
          // Don't stop the execution of behaviors in case of an error.
          try {
            behaviors[i].attach(context, settings);
          } catch (e) {
            Drupal.throwError(e);
          }
        }
      });
    };

    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);
