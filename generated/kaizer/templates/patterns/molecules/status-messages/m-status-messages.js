/**
 * DO NOT EDIT THIS FILE.
 * It's generated automatically by 'yarn build' command.
 * @preserve
 **/
(({ behaviors }) => {
  behaviors.kaizerMoleculeStatusMessages = {
    attach: (context) => {
      once('m-status-messages', '.m-status-messages', context).forEach((el) => {
        behaviors.kaizerMoleculeStatusMessages.handler(el);
      });
    },
    handler: (el) => {
      console.log(el);
    },
  };
})(Drupal);
