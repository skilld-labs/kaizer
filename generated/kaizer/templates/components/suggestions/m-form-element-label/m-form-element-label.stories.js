import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.title = args.title || 'Lorem ipsum';
  data.title_display = args.title_display || 'before';
  data.required = args.required;
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules / Form element label',
  // parameters: {
  //   layout: 'fullscreen',
  // },
  argTypes: {
    required: {
      name: 'Required',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    title_display: {
      name: 'Label display',
      defaultValue: 'before',
      options: ['before', 'after', 'invisible'],
      control: {
        type: 'radio',
      },
    },
  },
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
