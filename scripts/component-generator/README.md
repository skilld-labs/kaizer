# [ECOSYSTEM_NAME] Component generator

This is a part of [ECOSYSTEM_NAME](some_link) initiative and this package will help you to generate component.

#### Navigation
- [About component generator](#about-component-generator)
- [Installation](#installation)
- [Files structure](#files-structure)
- - [css](#css)
- - [js](#js)
- - [twig](#twig)
- - [stories.js](#storiesjs)
- - [yml](#yml)
- [License](#license)

## About component generator

This is a sub-package of [ECOSYSTEM_NAME theme generator](https://www.npmjs.com/package/@skilld/kaizer-theme-generator). It's not
recommended to use this package without Drupal theme, generated with our theme generator.

To not waste the time on creation of components manually - this package can save you hours, since it's providing already several
required files with some pre-defined "template" content inside.

## Installation

Run from generated theme `yarn cc` or via docker `make cc`. Component generator is smart, so it will ask you several questions in console
once you have executed one of those commands. Once script execution is finished - you will find your newly created component in
`templates/components/[type of integration]/` folder.

If you don't understand how your component will be integrated in Drupal - just select `uncategorized` option in console during
generation.

## Files structure

After generation you will have a new folder with the name of your component and prefix of atomic type. Inside this folder you will
get 7 generated files.

### css

For writing styles of your component - you have to use `*.src.css` filename. Put styles in there and after compilation your styles
will be compiled into `*.css` file <- use this compiled file in Drupal.

It's recommended to use [BEM methodology](https://getbem.com/naming/) of writing styles. Also you can use drupal's breakpoints in CSS,
see [here](https://www.npmjs.com/package/@skilld/kaizer-theme-generator#drupals-breakpoints-in-css-and-js) how to do that.

If you need images in CSS - put them into `your-component-name/images` folder and call normally from CSS like this for example:

`background-image: url('./images/name-of-image.jpg);`

### js

For writing scripts - you have to use `*.src.js` filename. Compiled version is `*.js`. You have to use compiled file in Drupal.

By default your generated `*.src.js` will have Drupal behaviors on the board. Use `context` and / or `settings` normally in `attach` method
according to Drupal specification. Behaviors are working in Storybook. There is also `once` function available.

Behavior name is unique and will never have collisions with other behaviors. It consist of:

`behaviors.[ThemeNameInCameCase][AtomicType][NameOfComponent]`

### twig

Twig file is based on javascript implementation of Twig PHP (thanks to [twig.js](https://www.npmjs.com/package/twig)).
All the available Drupal's functions and filters are available and works same way in Storybook. So write 
any required markup and enjoy its display in Storybook.

A component should have only one twig file inside. This file is automatically grabbed by Storybook - you don't need to write
an extra code to connect twig in story - it's already done by component generator template.

### stories.js

File required by Storybook. It will help you to configure your story: setup test content, declare argTypes, modifiers,
some specific behaviors of your component, and so on.

This file normally contains already everything you will potentially need for any possible case.

- Use `faker` if you would like to generate fake content (it's already imported by default in `*.stories.js` file), so just call it.
- If you need to generate Drupal's attributes, use `const some_custom_attributes = new DrupalAttribute();` in your story. By the way
`attributes` variable is always available in any twig by default.
- For specific effects in your story use `useEffect` - just uncomment it in `BasicRender` function.
- If you need fullscreen component - uncomment property `fullscreen`
- If you don't need white background (which is default in story) - uncomment `backgrounds` property and your background will be grey.
- If you need to set custom `argTypes` - just uncomment it. By the way - all `settings` from `*.yml` file are automatically
added into `argTypes`.

If you want to call any component from any other component, use the following:

```
r('[atomic type]-[component name]', [args]);
```

For example: 

```
r('a-icon', {
  icon: 'calendar'
})
```

By default render function will search for `Basic` story. If you don't have `Basic` story or want to call
another story of the component, use the following:

```
r(['[atomic type]-[component name]', '[story name]'], [args]);
```

For example:

```
r(['m-card', 'Second'], {
  title: 'My title',
})
```
 
### yml

This is the main file required by our integration with Drupal. But also it's required by `Storybook`.

Based on type of integration, `yml` file should also have prefix with type of integration in its filename. Available types of integration are: `theme` for layouts or as a theme hook integration, 
`suggestion` and `ui_patterns`. If your component isn't integrated - it shouldn't have any prefix in filename.

Structure of this file is based on [UI Patterns](https://ui-patterns.readthedocs.io/en/8.x-1.x/content/patterns-definition.html)

You should always have in this file:
- `use` setting with path to `twig` of component
- `label` setting for Preview
- optional libraries
- optional [settings](https://www.drupal.org/project/ui_patterns_settings)
- optional fields

`settings` in this file are automatically catched by Storybook and available as `argTypes` of component.

And another important thing is a one or two more lines describing type of integration of component in Drupal. These lines are:
- `hook theme`
- `base hook`

Read [here](some_link) about our integration to understand.

## License

This project is licensed under the MIT open source license.
