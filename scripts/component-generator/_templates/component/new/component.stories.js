---
to: <%= h.src() %>/templates/components/<%= connection_way %><% if (connection_way === 'layout' || connection_way === 'suggestion') { %>s<% } %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.stories.js
---
import {
  defRender,
  renderComponent as r,
  faker,
  DrupalAttribute,
  useEffect,
} from '@story-handler';

const BasicRender = (args, context) => {
  const { data, template } = defRender(args, context);
  data.content = 'Lorem ipsum';
  // useEffect(() => {
  //   place-your-js-code-here
  // }, [args]);
  return template.render(data);
};

export default {
  title: '<%= component_type %>s / <%= h.changeCase.sentenceCase(name) %>',
  // parameters: {
  //   layout: 'fullscreen',
  // },
};

export const Basic = {
  render: (args = {}, context) => BasicRender(args, context),
};
