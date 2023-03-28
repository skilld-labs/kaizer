---
to: <%= h.src() %>/templates/patterns/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.stories.js
---
import { defRender, defArgTypes } from '@<%= h.changeCase.lower(h.inflection.dasherize(theme_name)) %>-storybook/plugins/<%= h.changeCase.lower(h.inflection.dasherize(theme_name)) %>';

// Uncomment next line if you need specific javascript for your component in storybook,
// which shouldn't be a part of drupal's behavior javascript.
// import { useEffect } from '@storybook/client-api';

// Uncomment next line if you need to set DrupalAttribute to the other variable than "attributes" in twig.
// import DrupalAttribute from 'drupal-attribute';

import description from './<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.<% if (connection_way === "UI Patterns") { %>ui_patterns<% } else if (connection_way === "Base hook") { %>base_hook<% } else { %>component<% } %>.yml';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.content = args.content || 'Lorem ipsum';
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: '<%= component_type %>s/<%= h.changeCase.sentenceCase(name) %>',
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
