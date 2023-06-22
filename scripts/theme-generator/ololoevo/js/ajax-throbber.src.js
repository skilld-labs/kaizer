/**
 * @file
 * Ajax theme overrides.
 */

(($, Drupal, drupalSettings) => {
  // eslint-disable-next-line func-names
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(
      Drupal.theme('throbberCircle', this.progress.message),
    );
    $(this.element).after(this.progress.element);
  };

  // eslint-disable-next-line func-names
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(
      Drupal.theme('ajaxFullScreen', this.progress.message),
    );
    $('body').append(this.progress.element);
  };

  Drupal.theme.throbberCircle = () => `
    <svg class="a-throbber a-throbber--circle" aria-hidden="true">
      <use xlink:href="${drupalSettings.ololoevoSvgSprite}#svg-throbber-circle"></use>
    </svg>
  `;

  Drupal.theme.throbberFullScreen = () => `
    <div class="a-throbber a-throbber--fullscreen">
      <div class="a-throbber__line"></div>
    </div>
  `;
})(jQuery, Drupal, window.drupalSettings);
