/**
 * DO NOT EDIT THIS FILE.
 * It's generated automatically by 'yarn build' command.
 * @preserve
 **/
(({ behaviors }) => {
  behaviors.sdfsMoleculeMenuMain = {
    attach: (context) => {
      once('m-menu-main', '.m-menu-main', context).forEach((el) => {
        behaviors.sdfsMoleculeMenuMain.handler(el);
      });
    },
    handler: (el) => {
      el.querySelectorAll(
        '.m-menu-main__list--level-1 > .m-menu-main__item--has-menu > .m-menu-main__link',
      ).forEach((link) => {
        link.addEventListener('click', (e) => {
          if (window.matchMedia('(hover: none)').matches) {
            e.preventDefault();
            link.parentElement.classList.toggle('m-menu-main__item--active');
          }
        });
      });
    },
  };
})(Drupal);
