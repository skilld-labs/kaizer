---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/templates/components/suggestions/m-table/m-table.stories.js
---
import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

export default {
  title: 'Molecules / Table',
  parameters: {
    // layout: 'fullscreen',
    // backgrounds: { default: 'grey' },
  },
  // argTypes: {},
};

const generateRow = (labels, tag = 'td') => {
  const items = [];
  labels.forEach((label) => {
    items.push({
      attributes: new DrupalAttribute(),
      content: label,
      tag,
    });
  });
  return items;
};

const generateRows = (rows) => {
  const items = [];
  rows.forEach((row) => {
    items.push({
      attributes: new DrupalAttribute(),
      cells: generateRow(row.labels),
    });
  });
  return items;
};

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.header = generateRow(
    ['Pack Size', 'Quantity', 'Part No.', 'SGA Code'],
    'th',
  );
  data.rows = generateRows([
    {
      labels: ['500 g', 'Carton of 12', 'SFC501', 'SGA 78072723937'],
    },
    {
      labels: ['1 kg', 'Carton of 6', 'SFC101', 'SGA 78072723937'],
    },
    {
      labels: [
        '1 kg / 2.2 lb [USA Label]',
        'Carton of 6',
        '(SFC101-NA)',
        'SGA 66623390600',
      ],
    },
    {
      labels: [
        '1 kg / 2.2 lb [USA Label]',
        'Carton of 6',
        '(SFC101-NA)',
        'SGA 66623390600',
      ],
    },
  ]);
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
