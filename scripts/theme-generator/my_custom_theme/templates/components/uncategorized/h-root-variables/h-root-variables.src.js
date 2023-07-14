const rootVariablesHandler = () => {
  document.documentElement.style.setProperty(
    '--viewport-width',
    `${document.documentElement.clientWidth}px`,
  );
  document.documentElement.style.setProperty(
    '--viewport-height',
    `${window.innerHeight}px`,
  );
};

(({ behaviors }) => {
  behaviors.myCustomThemeHelperRootVariables = {
    attach: (context) => {
      const body = once(
        'root-variables',
        document.documentElement,
        context,
      ).unshift();
      if (body) {
        rootVariablesHandler();
        ['DOMContentLoaded', 'load', 'resize'].forEach((event) =>
          window.addEventListener(event, () => rootVariablesHandler()),
        );
      }
    },
  };
})(Drupal);