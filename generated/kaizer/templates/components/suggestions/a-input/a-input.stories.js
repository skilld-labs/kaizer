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
  if (args.placeholder) {
    data.attributes.setAttribute(
      'placeholder',
      args.placeholder !== true ? args.placeholder : 'Placeholder lorem ipsum',
    );
  }
  if (args.value) {
    data.attributes.setAttribute(
      'value',
      args.value !== true ? args.value : 'Value lorem ipsum',
    );
  }
  data.attributes.setAttribute('type', args.type || 'text');
  data.attributes.type = args.type || 'text';
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: 'Atoms / Input',
  // parameters: {
  //   layout: 'fullscreen',
  // },
  // argTypes: {},
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
