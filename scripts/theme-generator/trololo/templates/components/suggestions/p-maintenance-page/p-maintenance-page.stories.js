import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';
import LogoPath from '@root/logo.svg';

export default {
  title: 'Pages / Maintenance page',
  parameters: {
    layout: 'fullscreen',
    // backgrounds: { default: 'grey' },
  },
  // argTypes: {},
};

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.page = {};
  data.front_page = '/';
  data.logo = LogoPath;
  data.site_name = 'Trololo';
  data.page.content =
    'Site is currently under maintenance. We should be back shortly. Thank you for your patience.';
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
