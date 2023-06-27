---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/package.json
---
{
  "name": "<%= h.changeCase.lower(name) %>",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "engines": {
    "yarn": ">= 1.22",
    "node": ">= 18.0"
  },
  "devDependencies": {
    "@faker-js/faker": "^7.6.0",
    "@originjs/vite-plugin-content": "^1.0.3",
    "@skilld/kaizer-component-generator": "^0.0.1-alpha",
    "@storybook/addon-essentials": "^7",
    "@storybook/addon-interactions": "^7",
    "@storybook/blocks": "^7",
    "@storybook/html": "^7",
    "@storybook/html-vite": "^7",
    "@storybook/testing-library": "^0.1.0",
    "cli-real-favicon": "^0.0.8",
    "drupal-attribute": "^1.0.2",
    "drupal-twig-extensions": "^1.0.0-beta.4",
    "oslllo-svg-fixer": "^2.2.0",
    "prepend-file-cli": "^1.0.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "storybook": "^7",
    "stylelint": "^15.2.0",
    "svg-sprite": "^2.0.2",
    "svgo": "^3.0.2",
    "twig": "^1.16.0"
  },
  "dependencies": {
    "@drupal/once": "^1.0.1",
    "autoprefixer": "^10.4.13",
    "eslint": "^8.32.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-yml": "^1.5.0",
    "glob": "^8.1.0",
    "postcss": "^8.4.21",
    "postcss-custom-media": "^9.1.2",
    "postcss-custom-media-generator": "^1.1.0",
    "postcss-discard-empty": "^5.1.1",
    "postcss-header": "^3.0.3",
    "postcss-nested": "^6.0.1",
    "postcss-pxtorem": "^6.0.0",
    "prettier": "^2.8.3",
    "style-to-object": "^0.4.1",
    "stylelint-config-standard": "^30.0.1",
    "stylelint-order": "^6.0.2",
    "vite": "^4.3.7",
    "yaml": "^2.2.2"
  },
  "resolutions": {
    "file-system-cache": "2.3.0"
  },
  "scripts": {
    "build": "yarn build:theme & yarn build:components && yarn lint:fix",
    "build:theme": "yarn build:theme:css && yarn build:theme:js",
    "build:theme:css": "yarn vite build --config='vite.theme-css.config.js'",
    "build:theme:js": "yarn vite build --config='vite.theme-js.config.js'",
    "build:components": "yarn build:components:css && yarn build:components:js",
    "build:components:css": "yarn vite build --config='vite.components-css.config.js'",
    "build:components:js": "yarn vite build --config='vite.components-js.config.js'",
    "build:storybook": "storybook build",
    "storybook": "storybook dev -p 6006",
    "lint": "stylelint \"**/*.css\" --config='./.stylelintrc' & eslint --ext .yml . & eslint . --max-warnings 0 & prettier -c .",
    "lint:fix": "stylelint \"**/*.css\" --config='./.stylelintrc' --fix & eslint --ext .yml . --fix & eslint . --fix --max-warnings 0 && prettier -w .",
    "favicon": "mkdir -p favicon && real-favicon generate favicon.config.json favicon.output.json favicon && rm favicon.output.json",
    "svg-fix": "oslllo-svg-fixer -s images/svg/${FILE} -d images/svg && svgo images/svg/${FILE} -o images/svg --final-newline --config svgo.config.js",
    "svg-fix:all": "oslllo-svg-fixer -s images/svg -d images/svg && svgo -f images/svg -o images/svg --final-newline --config svgo.config.js",
    "sprite": "svg-sprite -s --svg-xmldecl=false --symbol-sprite='sprite.svg' --symbol-dest=images --shape-id-generator='svg-%s' images/svg/*.svg && prepend images/sprite.svg \"<!--\n    DO NOT EDIT THIS FILE\n    It's generated automatically by 'yarn sprite' command.\n    You have to re-generate 'sprite.svg' every time you\n    modifying icons in 'images/svg/' folder\n    @preserve\n-->\n\"",
    "cc": "npx @skilld/kaizer-component-generator --theme_name=<%= h.changeCase.lower(name) %>"
  },
  "private": true
}
