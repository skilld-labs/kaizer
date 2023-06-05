import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const buildMenuLinks = (items) => {
  items.forEach((item) => {
    item.attributes = new DrupalAttribute();
    item.url = '#';

    if (item.custom_display) {
      item.attributes.custom_display = item.custom_display;
    }

    if (item.need_help_block) {
      item.attributes.highlighted = true;
      item.attributes.highlighted_text = 'Need help?';
      item.title = 'Find your solution';
      item.url = {
        toString: '#',
      };
    }

    if (item.below) {
      buildMenuLinks(item.below);
    }
  });

  return items;
};

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.items = buildMenuLinks([
    {
      title: 'Products',
      below: [
        {
          title: 'By Market',
          below: [
            {
              title: 'Automotive',
              below: [{ title: 'Professional' }, { title: 'Car Care' }],
            },
            {
              title: 'Wood',
              below: [{ title: 'Instruments' }, { title: 'Furniture' }],
            },
            { title: 'Marine' },
            {
              title: 'Composite',
              below: [{ title: 'Solide Surfaces' }, { title: 'Resins' }],
            },
            {
              title: 'Transport',
              below: [
                { title: 'Motorhomes & Caravans' },
                { title: 'Aircraft' },
                { title: 'Trains' },
              ],
            },
          ],
        },
        {
          title: 'By Range',
          below: [
            { title: 'G360' },
            { title: 'G3' },
            { title: 'Profile' },
            { title: 'G3 Pro' },
            { title: 'G Mop' },
            { title: 'G Plus' },
            { title: 'G Plus' },
          ],
        },
        {
          title: 'By Type',
          below: [
            {
              title: 'Cutting Compounds',
              below: [
                { title: 'Automotive' },
                { title: 'Marine' },
                { title: 'Wood' },
                { title: 'Composite' },
              ],
            },
            {
              title: 'Polishing Machines',
              below: [
                { title: 'Rotary Polishers' },
                { title: 'Dual Action Polishers' },
                { title: 'Cordless Polishers' },
              ],
            },
            {
              title: 'Fine Cut Polishes',
              below: [
                { title: 'Automotive' },
                { title: 'Marine' },
                { title: 'Wood' },
                { title: 'Composite' },
              ],
            },
            {
              title: 'Other Types',
              below: [{ title: 'Polishing Accessories' }, { title: 'Kits' }],
            },
            {
              title: 'Waxes, Glazes & Finishing',
              below: [
                { title: 'Automotive' },
                { title: 'Marine' },
                { title: 'Wood' },
                { title: 'Composite' },
              ],
            },
            {
              title: 'Car Care',
              below: [
                { title: 'Cleaning' },
                { title: 'Polishes' },
                { title: 'Waxes & Finishing' },
                { title: 'Lorem ipsum 1' },
                { title: 'Lorem ipsum 2' },
              ],
            },
            {
              title: 'Polishing Pads',
              below: [
                { title: 'Foam Pads' },
                { title: 'Wool Pads' },
                { title: 'Microfibre Pads' },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Solutions',
      below: [
        {
          title: 'Automotive',
          below: [
            { title: 'Paint / Lacquer / Clear Coat' },
            { title: 'Resin / Gelcoat' },
            { title: 'Acrylic' },
            { title: 'Chrome / Metal' },
            { title: 'Plastic / Vinyl' },
            { title: 'Rubber' },
            { title: 'Fabric' },
            { title: 'Leather' },
            { title: 'Glass' },
            { title: 'Wheels' },
            { title: 'Engine Bay' },
          ],
        },
        {
          title: 'Motorhome / Caravan',
          below: [
            { title: 'Paint / Lacquer / Clear Coat' },
            { title: 'Resin / Gelcoat' },
            { title: 'Acrylic' },
            { title: 'Chrome / Metal' },
          ],
        },
        {
          title: 'Marine',
          below: [
            { title: 'Plastic / Vinyl' },
            { title: 'Rubber' },
            { title: 'Fabric' },
            { title: 'Leather' },
          ],
        },
        {
          title: 'Other Transport',
          below: [
            { title: 'Paint / Lacquer / Clear Coat' },
            { title: 'Resin / Gelcoat' },
            { title: 'Acrylic' },
            { title: 'Chrome / Metal' },
          ],
        },
        {
          title: 'Wood',
          below: [
            { title: 'Paint / Lacquer / Clear Coat' },
            { title: 'Chrome / Metal' },
          ],
        },
        {
          title: 'Composite',
          below: [
            { title: 'Paint / Lacquer / Clear Coat' },
            { title: 'Resin / Gelcoat' },
            { title: 'Acrylic' },
          ],
        },
        {
          need_help_block: true,
        },
      ],
    },
    {
      title: 'Resources',
      below: [
        {
          title: 'Advices & Documents',
          below: [
            { title: 'FAQ' },
            { title: 'Cases studies & Trainings' },
            { title: 'Document center' },
          ],
        },
      ],
    },
    {
      title: 'About us',
      below: [
        {
          title: 'Discover Farécla',
          below: [
            { title: 'Missions & Values' },
            { title: 'Our history' },
            { title: 'Sustainability' },
            { title: 'News & Events' },
          ],
        },
        {
          title: 'Example with 3 columns',
          below: [
            { title: 'Lorem ipsum 1', custom_display: 'three-columns' },
            { title: 'Lorem ipsum 2', custom_display: 'three-columns' },
            { title: 'Lorem ipsum 3', custom_display: 'three-columns' },
            { title: 'Lorem ipsum 4', custom_display: 'three-columns' },
            { title: 'Lorem ipsum 5', custom_display: 'three-columns' },
            { title: 'Lorem ipsum 6', custom_display: 'three-columns' },
            { title: 'Lorem ipsum 7', custom_display: 'three-columns' },
          ],
        },
        {
          title: 'Example with 2 columns',
          custom_display: 'two-columns',
          below: [
            { title: 'Lorem ipsum 1', custom_display: 'two-columns' },
            { title: 'Lorem ipsum 2', custom_display: 'two-columns' },
            { title: 'Lorem ipsum 3', custom_display: 'two-columns' },
            { title: 'Lorem ipsum 4', custom_display: 'two-columns' },
            { title: 'Lorem ipsum 5', custom_display: 'two-columns' },
            { title: 'Lorem ipsum 6', custom_display: 'two-columns' },
            { title: 'Lorem ipsum 7', custom_display: 'two-columns' },
          ],
        },
        {
          title: 'Example with 1 column',
          custom_display: 'one-column',
          below: [
            { title: 'Lorem ipsum 1', custom_display: 'one-column' },
            { title: 'Lorem ipsum 2', custom_display: 'one-column' },
            { title: 'Lorem ipsum 3', custom_display: 'one-column' },
            { title: 'Lorem ipsum 4', custom_display: 'one-column' },
            { title: 'Lorem ipsum 5', custom_display: 'one-column' },
            { title: 'Lorem ipsum 6', custom_display: 'one-column' },
            { title: 'Lorem ipsum 7', custom_display: 'one-column' },
          ],
        },
        { title: 'Lorem ipsum 4' },
        { title: 'Lorem ipsum 5' },
        { title: 'Lorem ipsum 6' },
        { title: 'Lorem ipsum 7' },
        { title: 'Lorem ipsum 8' },
        {
          title: 'Lorem ipsum 9',
          below: [
            { title: 'Lorem ipsum 1' },
            { title: 'Lorem ipsum 2' },
            { title: 'Lorem ipsum 3' },
            { title: 'Lorem ipsum 4' },
            { title: 'Lorem ipsum 5' },
            { title: 'Lorem ipsum 6' },
            { title: 'Lorem ipsum 7' },
            { title: 'Lorem ipsum 8' },
            { title: 'Lorem ipsum 9' },
            { title: 'Lorem ipsum 10' },
            { title: 'Lorem ipsum 11' },
            { title: 'Lorem ipsum 12' },
            { title: 'Lorem ipsum 13' },
            { title: 'Lorem ipsum 14' },
            { title: 'Lorem ipsum 15' },
            { title: 'Lorem ipsum 16' },
            { title: 'Lorem ipsum 17' },
            { title: 'Lorem ipsum 18' },
            { title: 'Lorem ipsum 19' },
            { title: 'Lorem ipsum 20' },
            { title: 'Lorem ipsum 21' },
            { title: 'Lorem ipsum 22' },
            { title: 'Lorem ipsum 23' },
            { title: 'Lorem ipsum 24' },
            { title: 'Lorem ipsum 25' },
            { title: 'Lorem ipsum 26' },
            { title: 'Lorem ipsum 27' },
            { title: 'Lorem ipsum 28' },
            { title: 'Lorem ipsum 29' },
            { title: 'Lorem ipsum 30' },
          ],
        },
      ],
    },
    { title: 'Lorem ipsum' },
  ]);
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: 'Molecules/Menu main',
  // parameters: {
  //   layout: 'fullscreen',
  // },
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
