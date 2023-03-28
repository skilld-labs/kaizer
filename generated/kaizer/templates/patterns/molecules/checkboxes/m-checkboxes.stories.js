import { defRender, defArgTypes } from '@kaizer-storybook/plugins/kaizer';
import { useEffect } from '@storybook/client-api';
import DrupalAttribute from 'drupal-attribute';
import { Basic as FormElement } from '@kaizer-components/molecules/form-element/m-form-element.stories';
import description from './m-checkboxes.component.yml';
import './m-checkboxes.src.css';
// import './m-checkboxes.src.js';

const BasicRender = (args) => {
  const { data, template } = defRender(args, description);
  data.children =
    args.children ||
    [
      FormElement.render({
        label: true,
        type: 'checkbox',
        name: 'm-checkboxes',
        id: 'm-checkboxes-1',
      }),
      FormElement.render({
        label: true,
        type: 'checkbox',
        name: 'm-checkboxes',
        id: 'm-checkboxes-2',
      }),
      FormElement.render({
        label: true,
        type: 'checkbox',
        name: 'm-checkboxes',
        id: 'm-checkboxes-3',
      }),
    ].join('');
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules/Checkboxes',
  // parameters: { layout: 'fullscreen' },
  argTypes: {
    ...defArgTypes(description),
  },
};

export const Basic = {
  render: (args = {}) => BasicRender(args),
};
