/**
 * DO NOT EDIT THIS FILE.
 * It's generated automatically by 'yarn build' command.
 * @preserve
 **/
(({ behaviors }) => {
  behaviors.kaizerMoleculeDetails = {
    attach: (context) => {
      once('m-details', '.m-details', context).forEach((el) => {
        behaviors.kaizerMoleculeDetails.handler(el);
      });
    },
    handler: (el) => {
      console.log(el);
    },
  };
})(Drupal);