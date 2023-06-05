import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  if (args.id) {
    data.attributes.setAttribute('id', args.id);
  }
  if (args.disabled) {
    data.attributes.setAttribute('disabled', '');
  }
  if (args.required) {
    data.attributes.setAttribute('required', '');
  }
  if (args.error) {
    data.attributes.addClass('error');
  }
  data.options = args.options || [
    {
      type: 'option',
      label: 'Lorem ipsum',
      value: '',
    },
    {
      type: 'option',
      label: 'Value 1',
      value: 'value_1',
    },
    {
      type: 'option',
      label: 'Value 2',
      value: 'value_2',
    },
    {
      type: 'option',
      label: 'Value 3',
      value: 'value_3',
    },
  ];
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: 'Atoms / Select',
  // parameters: {
  //   layout: 'fullscreen',
  // },
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
    error: {
      name: 'Error',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
