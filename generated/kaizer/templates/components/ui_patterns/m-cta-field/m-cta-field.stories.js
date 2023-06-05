import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  if (args.label) {
    data.label = args.label;
  }
  if (args.showLabel) {
    data.label = 'Lorem ipsum';
  }
  data.item = args.item || 'Lorem ipsum';
  data.item_href = args.href || '#';
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules / CTA field',
  parameters: {
    // layout: 'fullscreen',
    backgrounds: {
      default: 'grey',
    },
  },
  argTypes: {
    showLabel: {
      name: 'Show label',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
