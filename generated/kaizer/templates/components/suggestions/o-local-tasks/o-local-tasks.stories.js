import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.primary = '';
  [
    'View',
    'Test',
    'Results',
    'Edit',
    'Build',
    'Settings',
    'Export',
    'Translate',
    'Clone',
  ].forEach((item) => {
    data.primary += r('m-local-task', {
      link: item,
    });
  });
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: 'Organisms / Local tasks',
  // parameters: {
  //   layout: 'fullscreen',
  // },
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};