(({ behaviors }) => {
  behaviors.suThemePagesPage = {
    attach: (context) => {
      once('p-page', '.p-page', context).forEach((el) => {
        behaviors.suThemePagesPage.handler(el);
      });
    },
    handler: (el) => {
      const { documentElement } = document;
      const openMenu = el.querySelector('.p-page__control--menu-open');
      const closeMenu = el.querySelector('.p-page__control--menu-close');

      openMenu.addEventListener('click', () => {
        documentElement.classList.add('scroll-lock');
        documentElement.classList.add('p-page-menu-shown');
      });

      closeMenu.addEventListener('click', () => {
        documentElement.classList.remove('scroll-lock');
        documentElement.classList.remove('p-page-menu-shown');
      });
    },
  };
})(Drupal);
