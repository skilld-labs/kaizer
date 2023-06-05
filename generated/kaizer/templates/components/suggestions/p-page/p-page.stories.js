import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.page = {};
  data.page.branding = r('o-branding');
  // data.page.main_navigation = Menu.render();
  data.page.user_actions = r('a-button', {
    content: args.authorised ? 'Logout' : 'Login',
    href: '#',
  });
  if (args.system) {
    data.page.system = args.system;
  }
  data.page.breadcrumb = r('m-breadcrumb');
  // data.page.main_content = args.main_content || Grid.render();
  data.page.copyright = r('a-text', {
    content: '@ Copyright',
  });
  // data.page.secondary_navigation = Menu.render();
  // useEffect(() => { place-your-js-code-here }, [args]);
  return template.render(data);
};

export default {
  title: 'Pages / Page',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Anonymous = {
  render: (args = {}, context) => BasicRender(args, context),
};

export const Authorised = {
  render: (args = {}, context) => {
    args.authorised = true;
    // args.main_content = Grid.render({
    //   columns: 'h-grid--three-columns',
    //   gap: 'h-grid--gap-16',
    // });
    return BasicRender(args, context);
  },
};

export const Administrator = {
  render: (args = {}, context) => {
    args.system = [
      r('o-local-tasks'),
      r('m-status-messages', {
        type: args.system_messages_type,
      }),
    ].join('');
    args.authorised = true;
    // args.main_content = Grid.render({
    //   columns: 'h-grid--three-columns',
    //   gap: 'h-grid--gap-16',
    // });
    return BasicRender(args, context);
  },
};

Administrator.argTypes = {
  system_messages_type: {
    name: 'Type of system message',
    options: ['Status', 'Warning', 'Error', 'Information'],
    control: {
      type: 'radio',
    },
  },
};
