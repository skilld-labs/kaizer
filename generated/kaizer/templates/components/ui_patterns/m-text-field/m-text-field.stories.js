import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  if (args.showLabel) {
    data.label = 'Lorem ipsum';
  }
  if (args.label) {
    data.label = args.label;
  }
  data.item = args.item || faker.lorem.sentences();
  if (args.link) {
    data.item_href = '#';
  }
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules / Text field',
  // parameters: {
  //   layout: 'fullscreen',
  // },
  argTypes: {
    showLabel: {
      name: 'Show label',
      control: {
        type: 'boolean',
      },
    },
    link: {
      name: 'Link',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
