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
  if (args.disabled) {
    args.link
      ? data.attributes.addClass('is-disabled')
      : data.attributes.setAttribute('disabled', '');
  }
  useEffect(() => {
    if (args.ajax) {
      const throbber = (type = 'full') => `
        ${
          type === 'full'
            ? `<span class="a-button__icon-container a-button__icon-container--ajax-full">`
            : ''
        }
        <svg class="a-button__icon ${
          type !== 'full' ? 'a-button__icon--ajax ' : ''
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
    // parameters: {
    //   layout: 'fullscreen',
    // },
  },
  argTypes: {
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
    link: {
      name: 'Link',
      control: {
        type: 'boolean',
      },
    },
    ajax: {
      name: 'Ajax',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
