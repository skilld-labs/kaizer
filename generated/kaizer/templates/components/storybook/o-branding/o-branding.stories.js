import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';
import LogoPath from '@root/logo.svg';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.site_logo = LogoPath;
  data.site_slogan = 'Surface finishing specialists';
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: 'Organisms / Branding',
  // parameters: {
  //   layout: 'fullscreen',
  // },
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
