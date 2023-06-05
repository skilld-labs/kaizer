/**
 * @file
 * This is component script template.
 */
(({ behaviors }) => {
  behaviors.fareclaThemeMoleculeMenuMain = {
    attach: (context, settings) => {
      once('m-menu-main', '.m-menu-main', context).forEach((el) => {
        behaviors.fareclaThemeMoleculeMenuMain.handler(el, settings);
      });
    },
    handler: (el, settings) => {
      const { body } = document;
      const closeBtn = body.querySelector('.p-page__header-control-close');
      const backBtn = body.querySelector('.p-page__header-control-back');
      const placeholder = body.querySelector('.p-page__header-placeholder');
      const burgerDropdown = body.querySelector('.p-page__menu-dropdown');
      const dataLevel = 'data-m-menu-main-level-of-expanded-navigation';
      const classLinkExpanded = 'm-menu-main__link--expanded';
      const classSubMenuActive = 'm-menu-main__sub-menu-active';
      el.querySelectorAll('.m-menu-main__link').forEach((link) => {
        const menuLevel = parseInt(link.dataset.menuLevel, 10);
        if (link.nextElementSibling) {
          if (
            window.matchMedia(settings.fareclaThemeBreakpoints.l).matches &&
            (menuLevel === 1 || menuLevel === 2)
          ) {
            link.setAttribute('aria-expanded', 'false');
          }
          link.addEventListener('click', (e) => {
            if (
              window.matchMedia(settings.fareclaThemeBreakpoints.l).matches &&
              menuLevel === 3
            ) {
              return;
            }
            e.preventDefault();
            if (
              (menuLevel === 1 || menuLevel === 2) &&
              window.matchMedia(settings.fareclaThemeBreakpoints.l).matches
            ) {
              if (!link.classList.contains(classLinkExpanded)) {
                link
                  .closest('.m-menu-main__list')
                  .querySelectorAll(`.${classLinkExpanded}`)
                  .forEach((alreadyExpandedMenuLink) => {
                    alreadyExpandedMenuLink.nextElementSibling.classList.remove(
                      classSubMenuActive,
                    );
                    alreadyExpandedMenuLink.classList.remove(classLinkExpanded);
                    alreadyExpandedMenuLink.setAttribute(
                      'aria-expanded',
                      'false',
                    );
                  });
                link.setAttribute('aria-expanded', 'true');
                link.classList.add(classLinkExpanded);
                link.nextElementSibling.classList.add(classSubMenuActive);
              } else if (menuLevel === 1) {
                link.setAttribute('aria-expanded', 'false');
                link.classList.remove(classLinkExpanded);
                link.nextElementSibling.classList.remove(classSubMenuActive);
              }
            } else {
              if (menuLevel === 1) {
                if (burgerDropdown) {
                  burgerDropdown.classList.toggle('scroll-lock');
                }
              } else if (menuLevel === 2) {
                link
                  .closest('.m-menu-main__sub-menu')
                  .classList.toggle('scroll-lock');
              }
              link.classList.toggle(classLinkExpanded);
              link.nextElementSibling.classList.toggle(classSubMenuActive);
            }
            if (menuLevel < 3) {
              if (
                !window.matchMedia(settings.fareclaThemeBreakpoints.l).matches
              ) {
                body.setAttribute(
                  dataLevel,
                  body.hasAttribute(dataLevel)
                    ? parseInt(body.getAttribute(dataLevel), 10) + 1
                    : 1,
                );
              } else {
                const firstMatchedSecondLevelDropdown =
                  link.nextElementSibling.querySelector(
                    '.m-menu-main__sub-menu--2-level',
                  );
                if (
                  menuLevel === 1 &&
                  window.matchMedia(settings.fareclaThemeBreakpoints.l)
                    .matches &&
                  firstMatchedSecondLevelDropdown
                ) {
                  firstMatchedSecondLevelDropdown.classList.add(
                    classSubMenuActive,
                  );
                  firstMatchedSecondLevelDropdown.previousElementSibling.classList.add(
                    classLinkExpanded,
                  );
                  firstMatchedSecondLevelDropdown.previousElementSibling.setAttribute(
                    'aria-expanded',
                    'true',
                  );
                }
              }
              if (
                placeholder &&
                !window.matchMedia(settings.fareclaThemeBreakpoints.l).matches
              ) {
                if (body.getAttribute(dataLevel) === '1') {
                  placeholder.insertAdjacentHTML(
                    'beforeend',
                    `<div class="a-text a-text--header-2">${
                      link.querySelector('.m-menu-main__thin-link-text')
                        ? link
                            .querySelector('.m-menu-main__thin-link-text')
                            .textContent.trim()
                        : link.textContent.trim()
                    }</div>`,
                  );
                }
                if (body.getAttribute(dataLevel) === '2') {
                  placeholder.insertAdjacentHTML(
                    'beforeend',
                    `<div data-header-placeholer-second class="a-text a-text--header-3">${
                      link.querySelector('.m-menu-main__thin-link-text')
                        ? link
                            .querySelector('.m-menu-main__thin-link-text')
                            .textContent.trim()
                        : link.textContent.trim()
                    }</div>`,
                  );
                }
              }
            }
          });
        }
      });

      ['.m-menu-main__close', '.m-menu-main__overlay'].forEach((target) => {
        el.querySelectorAll(target).forEach((overlay) => {
          overlay.addEventListener('click', () => {
            el.querySelectorAll(`.${classLinkExpanded}`).forEach((active) => {
              active.nextElementSibling.classList.remove(classSubMenuActive);
              active.classList.remove(classLinkExpanded);
            });
          });
        });
      });

      if (backBtn) {
        backBtn.addEventListener('click', () => {
          if (body.hasAttribute(dataLevel)) {
            if (body.getAttribute(dataLevel) === '1') {
              burgerDropdown.classList.remove('scroll-lock');
              burgerDropdown.querySelectorAll('.scroll-lock', (locked) => {
                locked.classList.remove(locked);
              });
              body.removeAttribute(dataLevel);

              if (placeholder) {
                placeholder.innerHTML = '';
              }
            } else {
              burgerDropdown
                .querySelector(
                  `.m-menu-main__sub-menu--${
                    parseInt(body.getAttribute(dataLevel), 10) - 1
                  }-level`,
                )
                .classList.remove('scroll-lock');
              burgerDropdown
                .querySelector(
                  `.m-menu-main__sub-menu--${
                    parseInt(body.getAttribute(dataLevel), 10) - 1
                  }-level`,
                )
                .querySelectorAll('.scroll-lock')
                .forEach((locked) => {
                  locked.classList.remove('scroll-lock');
                });
              if (
                placeholder &&
                placeholder.querySelector('[data-header-placeholer-second]') &&
                body.getAttribute(dataLevel) === '2'
              ) {
                placeholder
                  .querySelector('[data-header-placeholer-second]')
                  .remove();
              }
              body.setAttribute(
                dataLevel,
                parseInt(body.getAttribute(dataLevel), 10) - 1,
              );
            }
            const subMenuActive = el.querySelectorAll(
              `.${classSubMenuActive}:not(.m-menu-main__list--4-level)`,
            );
            if (
              subMenuActive[subMenuActive.length - 1].previousElementSibling
            ) {
              subMenuActive[
                subMenuActive.length - 1
              ].previousElementSibling.classList.remove(classLinkExpanded);
            }
            subMenuActive[subMenuActive.length - 1].classList.remove(
              classSubMenuActive,
            );
            subMenuActive[subMenuActive.length - 1]
              .querySelectorAll(`.${classSubMenuActive}`)
              .forEach((sub) => {
                if (sub.previousElementSibling) {
                  sub.previousElementSibling.classList.remove(
                    classLinkExpanded,
                  );
                }
                sub.classList.remove(classSubMenuActive);
              });
          }
        });
      }

      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          el.querySelectorAll(`.${classSubMenuActive}`).forEach((active) => {
            if (active.previousElementSibling) {
              active.previousElementSibling.classList.remove(classLinkExpanded);
            }
            active.classList.remove(classSubMenuActive);
          });
          if (placeholder) {
            placeholder.innerHTML = '';
          }
          body.removeAttribute(dataLevel);
        });
      }

      document.addEventListener('click', (e) => {
        if (
          window.matchMedia(settings.fareclaThemeBreakpoints.l).matches &&
          e.target &&
          !e.target.classList.contains('m-menu-main__overlay') &&
          !e.target.classList.contains('m-menu-main__close') &&
          // !e.target.hasAttribute('data-menu-level') &&
          // !e.target.getAttribute('data-menu-level') === '1' &&
          // !e.target.hasAttribute('aria-expanded') &&
          !e.target.closest('[data-menu-level="1"][aria-expanded]') &&
          !e.target.classList.contains('m-menu-main__sub-menu--1-level') &&
          !e.target.closest('.m-menu-main__sub-menu--1-level') &&
          el.querySelector(`.${classSubMenuActive}`)
        ) {
          el.querySelectorAll(`.${classLinkExpanded}`).forEach((active) => {
            active.nextElementSibling.classList.remove(classSubMenuActive);
            active.classList.remove(classLinkExpanded);
          });
        }
      });

      window
        .matchMedia(settings.fareclaThemeBreakpoints.l)
        .addEventListener('change', (e) => {
          if (placeholder) {
            placeholder.innerHTML = '';
          }
          body.removeAttribute(dataLevel);
          el.querySelectorAll(`.${classSubMenuActive}`).forEach((active) => {
            if (active.previousElementSibling) {
              active.previousElementSibling.classList.remove(classLinkExpanded);
            }
            active.classList.remove(classSubMenuActive);
          });
          el.querySelectorAll(
            '.m-menu-main__link[data-menu-level="1"], .m-menu-main__link[data-menu-level="2"]',
          ).forEach((link) => {
            if (link.nextElementSibling) {
              if (e.matches) {
                link.setAttribute('aria-expanded', 'false');
              } else {
                link.removeAttribute('aria-expanded');
              }
            }
          });
        });
    },
  };
})(Drupal);
