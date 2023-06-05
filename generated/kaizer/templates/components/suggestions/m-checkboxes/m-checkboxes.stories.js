import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.children =
    args.children ||
    [
      r('m-form-element', {
        label: true,
        type: 'checkbox',
        name: 'm-checkboxes',
        id: 'm-checkboxes-1',
      }),
      r('m-form-element', {
        label: true,
        type: 'checkbox',
        name: 'm-checkboxes',
        id: 'm-checkboxes-2',
      }),
      r('m-form-element', {
        label: true,
        type: 'checkbox',
        name: 'm-checkboxes',
        id: 'm-checkboxes-3',
      }),
    ].join('');
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules / Checkboxes',
  // parameters: {
  //   layout: 'fullscreen',
  // },
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
