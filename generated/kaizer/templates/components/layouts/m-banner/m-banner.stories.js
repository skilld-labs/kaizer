import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.media = r('m-responsive-image', {
    group: 'machine_name_of_responsive_image_group_1',
  });
  data.title = r('a-text', {
    content: 'Banner title',
    tag: 'h3',
    type: 'a-text--h3',
  });
  data.cta = r('a-text', {
    content: 'Click me',
    link: true,
  });
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules / Banner',
  // parameters: {
  //   layout: 'fullscreen',
  // },
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};