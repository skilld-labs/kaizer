/**
 * DO NOT EDIT THIS FILE.
 * It's generated automatically by 'yarn build' command.
 * @preserve
 **/
(({ behaviors }, $) => {
  behaviors.fareclaContainerAsLink = {
    attach: (context) => {
      once(
        'container-as-link',
        '[container-as-link-container]',
        context,
      ).forEach((el) => {
        const link =
          el.querySelector(`a[container-as-link-target][href]`) ||
          el.querySelector('a[href]');
        if (link) {
          behaviors.fareclaContainerAsLink.handler(el, link);
        }
      });
    },
    handler: (el, link) => {
      const isAjaxLink = link.classList.contains('use-ajax');
      link.setAttribute('container-as-link-target-built', '');
      el.setAttribute('container-as-link-built', '');
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'link');
      el.querySelectorAll('a[href]').forEach((innerLink) => {
        innerLink.setAttribute('tabindex', '-1');
      });
      if (isAjaxLink) {
        el.addEventListener('mousedown', (e) => {
          behaviors.fareclaContainerAsLink.fakeLinkEvents(
            el,
            link,
            e,
            isAjaxLink,
          );
        });
      } else {
        el.setAttribute(
          'aria-label',
          link.hasAttribute('title')
            ? link.getAttribute('title')
            : link.textContent.replace(/\s+/g, ' ').trim(),
        );
        el.addEventListener('click', (e) => {
          behaviors.fareclaContainerAsLink.fakeLinkEvents(el, link, e);
        });
      }
      el.addEventListener('keydown', (e) => {
        behaviors.fareclaContainerAsLink.fakeLinkEvents(
          el,
          link,
          e,
          isAjaxLink,
        );
      });
    },
    fakeLinkEvents: (el, link, e, isAjax = false) => {
      if (isAjax) {
        if (
          (e.type === 'mousedown' || e.key === 'Enter') &&
          e.target &&
          e.target.tagName !== 'A' &&
          !e.target.closest('[container-as-link-target-built]')
        ) {
          $(link).trigger('click');
        }
      } else if (
        (e.type === 'click' || e.key === 'Enter') &&
        e.target &&
        e.target.tagName !== 'A' &&
        !e.target.closest('[container-as-link-target-built]')
      ) {
        window.open(
          link.getAttribute('href'),
          link.hasAttribute('target') ? link.getAttribute('target') : '_self',
        );
      }
    },
  };
})(Drupal, jQuery);