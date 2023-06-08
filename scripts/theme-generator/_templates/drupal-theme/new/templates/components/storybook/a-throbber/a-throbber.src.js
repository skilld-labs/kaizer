---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/templates/components/storybook/a-throbber/a-throbber.src.js
---
// (({ behaviors }) => {
//   behaviors.<%= h.changeCase.camelCase(name) %>AtomThrobber = {
//     attach: (context) => {
//       once('a-throbber', '.a-throbber', context).forEach((el) => {
//         behaviors.<%= h.changeCase.camelCase(name) %>AtomThrobber.handler(el);
//       });
//     },
//     handler: (el) => {
//       // eslint-disable-next-line no-console
//       console.log(el);
//     },
//   };
// })(Drupal);
