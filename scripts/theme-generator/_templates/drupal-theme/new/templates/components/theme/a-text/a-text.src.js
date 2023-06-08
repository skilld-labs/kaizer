---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/templates/components/theme/a-text/a-text.src.js
---
// (({ behaviors }) => {
//   behaviors.<%= h.changeCase.camelCase(name) %>AtomText = {
//     attach: (context) => {
//       once('a-text', '.a-text', context).forEach((el) => {
//         behaviors.<%= h.changeCase.camelCase(name) %>AtomText.handler(el);
//       });
//     },
//     handler: (el) => {
//       // eslint-disable-next-line no-console
//       console.log(el);
//     },
//   };
// })(Drupal);
