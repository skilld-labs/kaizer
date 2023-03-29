---
to: <%= h.src() %>/templates/patterns/<%= h.changeCase.lower(h.inflection.pluralize(component_type)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.src.js
---
// /**
//  * @file
//  * This is component script template.
//  */
// (({ behaviors }) => {
//   behaviors.<% if (typeof theme_name != 'undefined') { %><%= h.changeCase.camelCase(theme_name) %><% } else { %><%= h.changeCase.camelCase(h.theme_name) %><% } %><%= component_type %><%= h.changeCase.pascalCase(name) %> = {
//     attach: (context) => {
//       once('<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>', '.<%= h.changeCase.lower(component_type).charAt(0) %>-<%= h.changeCase.lower(h.inflection.dasherize(name)) %>', context).forEach((el) => {
//         behaviors.<% if (typeof theme_name != 'undefined') { %><%= h.changeCase.camelCase(theme_name) %><% } else { %><%= h.changeCase.camelCase(h.theme_name) %><% } %><%= component_type %><%= h.changeCase.pascalCase(name) %>.handler(el);
//       });
//     },
//     handler: (el) => {
//       // eslint-disable-next-line no-console
//       console.log(el);
//     },
//   };
// })(Drupal);
