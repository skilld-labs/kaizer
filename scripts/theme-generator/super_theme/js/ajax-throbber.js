/**
 * DO NOT EDIT THIS FILE.
 * It's generated automatically by 'yarn build' command.
 * @preserve
 **/
(($, Drupal2, drupalSettings) => {
  Drupal2.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(
      Drupal2.theme('throbberCircle', this.progress.message),
    );
    $(this.element).after(this.progress.element);
  };
  Drupal2.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(
      Drupal2.theme('ajaxFullScreen', this.progress.message),
    );
    $('body').append(this.progress.element);
  };
  Drupal2.theme.throbberCircle = () => `
    <svg class="a-throbber a-throbber--circle" aria-hidden="true">
      <use xlink:href="${drupalSettings.superThemeSvgSprite}#svg-throbber-circle"></use>
    </svg>
  `;
  Drupal2.theme.throbberFullScreen = () => `
    <div class="a-throbber a-throbber--fullscreen">
      <div class="a-throbber__line"></div>
    </div>
  `;
})(jQuery, Drupal, window.drupalSettings);
