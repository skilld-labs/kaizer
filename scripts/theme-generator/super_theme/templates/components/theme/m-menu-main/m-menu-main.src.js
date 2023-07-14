/**
 * @file
 * This is component script template.
 */
(({ behaviors }) => {
  behaviors.superThemeMoleculeMenuMain = {
    attach: (context) => {
      once('m-menu-main', '.m-menu-main', context).forEach((el) => {
        behaviors.superThemeMoleculeMenuMain.handler(el);
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
