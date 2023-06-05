import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.breadcrumb = args.items || [
    {
      text: 'Trailing breadcrumb',
      url: '#',
    },
    {
      text: 'Trailing breadcrumb',
      url: '#',
    },
    {
      text: 'Current page',
    },
  ];
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules / Breadcrumb',
  // parameters: {
  //   layout: 'fullscreen',
  // },
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
