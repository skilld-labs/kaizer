---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/templates/components/suggestions/a-textarea/a-textarea.stories.js
---
import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

export default {
  title: 'Atoms / Textarea',
  parameters: {
    // layout: 'fullscreen',
    // backgrounds: { default: 'grey' },
  },
  // argTypes: {},
};

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.wrapper_attributes = new DrupalAttribute();
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
    data.value = args.value !== true ? args.value : 'Value lorem ipsum';
  }
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
