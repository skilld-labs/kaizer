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
  if (args.link) {
    data.href = args.href || '#';
  }
  if (args.disabled || args.ajax) {
    args.link
      ? data.attributes.addClass('is-disabled')
      : data.attributes.setAttribute('disabled', '');
  }
  useEffect(() => {
    // Simulation of ajax throbber.
    if (args.ajax) {
      const throbber = (type = 'full') => `
        ${
          type === 'full'
            ? `<span class="a-button__icon-container a-button__icon-container--throbber-full">`
            : ''
        }
        <svg class="a-button__icon ${
          type !== 'full'
            ? 'a-button__icon--throbber a-throbber a-throbber--circle '
            : ''
        }a-icon a-icon--throbber-circle" aria-hidden="true">
          <use xlink:href="${data.kaizerSvgSprite}#svg-throbber-circle"></use>
        </svg>
        ${type === 'full' ? '</span>' : ''}
      `;
      const btn = document.querySelector('.a-button');
      if (
        (!btn.querySelector('.a-button__icon-container--start') &&
          !btn.querySelector('.a-button__icon-container--end')) ||
        (btn.querySelector('.a-button__icon-container--start') &&
          btn.querySelector('.a-button__icon-container--end'))
      ) {
        btn.insertAdjacentHTML('afterbegin', throbber());
      } else if (btn.querySelector('.a-button__icon-container--start')) {
        btn
          .querySelector('.a-button__icon-container--start')
          .insertAdjacentHTML('afterbegin', throbber('start'));
      } else if (btn.querySelector('.a-button__icon-container--end')) {
        btn
          .querySelector('.a-button__icon-container--end')
          .insertAdjacentHTML('afterbegin', throbber('end'));
      }
    }
  }, [args]);
  return template.render(data);
};

export default {
  title: 'Atoms / Button',
  parameters: {
    // layout: 'fullscreen',
    // backgrounds: { default: 'grey' },
  },
  // argTypes: {},
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
