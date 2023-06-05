import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.content = args.content || 'Lorem ipsum';
  if (args.extra_classes) {
    data.attributes.addClass(args.extra_classes);
  }
  if (args.visibility_classes) {
    data.attributes.addClass(args.visibility_classes);
  }
  if (args.name) {
    data.attributes.setAttribute('storybook-dialog-name', args.name);
  }
  if (args.title) {
    data.dialog_title = args.title;
  }
  if (args.close) {
    data.close = args.close;
  }
  if (args.content) {
    data.content = args.content;
  }
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: 'Organisms / Dialog',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Basic = {
  render: (args = {}, context) => {
    args.title = r('a-text', {
      content: 'Dialog title',
      type: 'h2',
    });
    args.close = r('a-button', {
      content: 'Close',
      trailing_icon: 'close',
    });
    args.content = r('a-text', {
      content: 'This is dialog content',
    });
    return BasicRender(args, context);
  },
};
