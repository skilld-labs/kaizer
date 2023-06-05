import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.attributes.setAttribute('type', 'checkbox');
  if (args.id) {
    data.attributes.setAttribute('id', args.id);
  }
  if (args.name) {
    data.attributes.setAttribute('name', args.name);
  }
  if (args.disabled || args.ajax) {
    data.attributes.setAttribute('disabled', '');
  }
  if (args.required) {
    data.attributes.setAttribute('required', '');
  }
  if (args.error) {
    data.attributes.addClass('error');
  }
  if (args.checked) {
    data.attributes.setAttribute('checked', '');
  }
  useEffect(() => {
    // Simulation of ajax throbber.
    if (args.ajax) {
      document.querySelector('.a-checkbox__element').insertAdjacentHTML(
        'afterend',
        `
        <svg class="a-checkbox__icon a-checkbox__icon--throbber a-throbber a-throbber--circle" aria-hidden="true">
          <use xlink:href="${data.kaizerSvgSprite}#svg-throbber-circle"></use>
        </svg>
      `,
      );
    }
  }, [args]);
  return template.render(data);
};

export default {
  title: 'Atoms / Checkbox',
  // parameters: {
  //   layout: 'fullscreen',
  // },
  // argTypes: {},
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
