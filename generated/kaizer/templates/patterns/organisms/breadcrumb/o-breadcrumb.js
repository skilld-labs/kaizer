/**
 * DO NOT EDIT THIS FILE.
 * It's generated automatically by 'yarn build' command.
 * @preserve
 **/
(({ behaviors }) => {
  behaviors.kaizerOrganismBreadcrumb = {
    attach: (context) => {
      once('o-breadcrumb', '.o-breadcrumb', context).forEach((el) => {
        behaviors.kaizerOrganismBreadcrumb.handler(el);
      });
    },
    handler: (el) => {
      console.log(el);
    },
  };
})(Drupal);
