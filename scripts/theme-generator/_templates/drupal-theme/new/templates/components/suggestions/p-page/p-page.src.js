---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/templates/components/suggestions/p-page/p-page.src.js
---
(({ behaviors }) => {
  behaviors.<%= h.changeCase.camelCase(name) %>PagesPage = {
    attach: (context) => {
      once('p-page', '.p-page', context).forEach((el) => {
        behaviors.<%= h.changeCase.camelCase(name) %>PagesPage.handler(el);
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
