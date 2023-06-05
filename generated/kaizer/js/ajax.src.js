/**
 * @file
 * Ajax theme overrides for Kaizer theme.
 */

(($, Drupal) => {
  const throbberHandler = (obj) => {
    obj.progress.element = $(
      Drupal.theme('ajaxFullScreen', obj.progress.message),
    );
    $('body').append(obj.progress.element);
  };

  // eslint-disable-next-line func-names
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    throbberHandler(this);
  };

  // eslint-disable-next-line func-names
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    throbberHandler(this);
  };

  Drupal.theme.ajaxFullScreen = () => `
    <div class="ajax-progress">
      <div class="ajax-progress__line"></div>
    </div>
  `;
})(jQuery, Drupal);
