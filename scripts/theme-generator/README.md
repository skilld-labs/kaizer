# KAIZER

This is theme generator for [Drupal](https://www.drupal.org/).

## Hey btw! We have created a very nice integration of components in drupal.

[Read more](lesha_link!!)

Soon - video tutorial explaining this <strong>theme generator</strong>, 
[Component generator](https://www.npmjs.com/package/@skilld/kaizer-component-generator), 
and [Component connector](https://www.drupal.org/sandbox/gaydabura/3361207) module


### Navigation
- [Why you need this theme generator](#why-you-need-this-theme-generator)
- [Goals](#goals-and-why-we-sure-you-were-trying-to-find-such-theme-generator-your-entire-career)
- [Features](#features-your-generated-theme-will-have)
- [Installation](#installation)
- [More about generated theme](#explanation-of-generated-theme)
- [Theme structure](#now-more-about-structure-of-theme)
- [Creation of new component](#how-to-create-new-component)
- [Compilation of styles and scripts](#how-to-compile-styles-and-scripts)
- [Usage of storybook](#how-to-run-and-compile-storybook)
- [Generation of svg sprite](#how-to-generate-svg-sprite)
- [Optimisations of source svg files](#how-to-remove-unnecessary-trash-from-source-svg-files)
- [Generataion of favicon](#how-to-generate-new-favicon)
- [Components, what you have to know](#components)
- [License](#license)

### Why you need this theme generator?

It can give you next benefits:

<strong>For a company in long term strategy.</strong>

1. <strong>Much less time development of drupal websites will take</strong>. We are estimating a 30% reduction in the total time to develop a site of any complexity comparing to what you had before.
2. Storybook under the hood. We went through it from beginning till the end. Your customers will be happy to see lots of progress already in the beginning of project. Since for frontender to build a whole storybook with your unique design system will take 90% less time than to build drupal web-site. Customers loves visual effect which storybook can give. Moreover - almost all components from storybook will be re-used by Drupal, so it becomes not a standalone tool. Methodology of doing storybook is well described [below](Below).
3. Your drupal developers will know drupal much more than before due to complexity of approach we have created.
4. New era in contribution in drupal opened.

<strong>For a regular drupal developer</strong>
1. All the well known features partially coming from drupal core under the hood: postCSS, Javascript ES6, linting processes. Also many other very helpful features: [read below](#features-your-generated-theme-will-have).
2. Well known structure of theme, similar to drupal core themes.
3. Powerful and modern tools: vite, storybook - everything to make your life easier and development process faster. 

### Goals and why we sure you were trying to find such theme generator your entire career.

A massive theme generator to which we have been going for 7 years step by step. And finally - it's released! 
It will be long read for you, because a big amount of technical information. I hope you will enjoy it. 

You all know how it feels like when you switching between lots of projects during your career with different theme structures, features, and what's most important - level and quality of delivering front-end to Drupal.

Drupal allows users to do so many things with so many different ways and it creates 
a mess from project to project. As a good developer you want to have the same set 
of tools on all projects, but it's always different, because there is no clear 
strategy regarding how to make drupal's web-sites with the best way. There is no 
best way, because Drupal is very flexible, and using one or another approach can be 
logically described.

However, what we absolutely sure today - is that <strong>on drupal projects we have 
to make drupal themes</strong>. So we have to pay respect to all set of core tools 
Drupal allows us to use for theme. Continue speaking about goals of our theme generator - 
we asked ourselves what are we expecting from drupal theme as a frontenders?

1. postCSS - preferred tool for transformation of modern css, picked by drupal core community few years ago. It's making sense to follow them.
2. JavaScript ES6
3. Linting of everything with the same tools Drupal core have and with the same configuration of linters

Ok, what else frontenders loves so much last several years - <strong>component's approach</strong> 
becomes very popular! But what are our components in drupal? Here is where we have stuck in the 
beginning of our huge initiative. 

Everyone can create a folder named `my-component` in Drupal theme and put there 
`.css`, `.js` and even `.twig` files, but for drupal it's just nothing initially. 
Noising folders with unclear goals of why it's created. Of course we can declare 
a drupal library in `themename.libraries.yml` file and attach there our `.css` 
and `.js` files. And we also can somehow deliver our custom `my-component.html.twig` 
file in drupal literally or figuratively.

And then we found a revolutioning initiative for Drupal called 
[UI Patterns](https://www.drupal.org/project/ui_patterns). In short - this initiative 
allows your component be something in drupal only by providing simple yml file with 
several lines of code. And then another initiative [Single Directory Components (SDC)](https://www.drupal.org/project/sdc)
has been released with the more or less similar concept: we need component directory
and we should be able to link it somehow to Drupal.

However, `UI Patterns` and `SDC` can't solve several issues:

1. We can't apply `UI Patterns` everywhere in Drupal. Only as a field formatter, maybe layout, maybe view results, something else. But it's only few percentages from the all possible render. What to do with Drupal core's theme hooks with core twig templates? Every drupal developer even with minimal experience knows what is `form-element.html.twig` or `input.html.twig` or `page.html.twig` or `views-view.html.twig`. So if i will create my component called `my-page` with css, js and twig - how to connect it to drupal? With the `SDC` initiative?
2. With `SDC` it's possible using render arrays or twig overrides. But wait, with `UI Patterns` we can declare simple `.yml` file inside of component and Drupal can see it and apply. Is there a way to avoid overriding of drupal twig templates, writing preprocess hooks, defining custom layouts, etc. with a single `.yml` file in every component, describing what this component is and how and where Drupal should apply it? This is what we've done - [read more](lesha_link!!) about integration.

As a result of all these - we took care about massive integration of components in drupal. Now you can put `.yml` file with small description into your component and drupal will see your component immediately! It will load your custom twig file where you need, it will load all the css/js related assets you will declare, component settings, fields (aka. layout's regions), etc. The structure of yml configuration is similar to [UI Patterns documentation](https://ui-patterns.readthedocs.io/en/8.x-1.x/).
Moreover - in this theme generator you will find a lot of base components (or examples, up to you) which exist on every single project, [more details below](BELOW).


### Features your generated theme will have

- [Vite](https://vitejs.dev/)
- PostCSS v8.4
- [Storybook](https://storybook.js.org/docs/react/builders/vite) v7.0
- Kaizer component generator - [learn more](https://www.npmjs.com/package/@skilld/kaizer-component-generator)
- Linting and auto-fixer of css, js, yml files using Stylelint, Eslint and Prettier
- Svg sprite generator and optimizer of svg assets
- [Favicon generator](https://www.npmjs.com/package/cli-real-favicon)
- Drupal's breakpoints in css and js
- Integration with [Color](https://www.drupal.org/project/color) module
- Multiple base components pre-installed in theme with minimal styles and scripts with two reasons: base components are exist on every single project, so you would anyway create them and pre-installed base components will help you to understand/try/learn approach with integration of components in drupal we made.

### Installation

Our plans are to create contrib starterkit theme and put it on drupal.org, so you will be able 
to generate sub-theme using 
[starterkit-theme](https://www.drupal.org/docs/core-modules-and-themes/core-themes/starterkit-theme)
php script. However this script is not well working, so it's not fitting our requirements 
for now and we need to polish this script first.

But already today you can install your new drupal theme from our generator using:
1. `npx @skilld/kaizer-theme-generator`
2. or via docker - `docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine npx @skilld/kaizer-theme-generator`

After execution of one of those commands - just follow instructions in console.

Then you have to:
1. `cd themename/`
2. `yarn install` or via docker `docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn install`
3. `yarn build` or via docker `docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn build`

### Explanation of generated theme

This theme is supposed to work in conjuction with [Component connector](https://www.drupal.org/sandbox/gaydabura/3361207) module. 
And also before activating new theme in Drupal you also have to install and enable several other modules - you can find list of modules in `themename.info.yml` in `dependencies` setting.

This theme is also working with 
[Component generator](https://www.npmjs.com/package/@skilld/kaizer-component-generator), which 
can very simplify creation of new components. [Click here](##something) to see how to use `Component generator`.

So the idea of generated theme is pretty simple - you have storybook with several components and 
your goal (as a developer) to implement a whole design system in storybook, and then backender
can link your storybook components in Drupal via `.yml` file inside components.

As a frontender 
you can not be an architect of Drupal web-site, no matter which experience you have. The architect
of project can be defined only with communication between all involved persons - project managers, 
backenders and frontenders, all together. That means you can't just create an abstract components. You have to think 
first what your component will be in drupal - and only after that (when it was validated by all involved
persons) - you can build component in storybook. 

Here is example. Try to imagine CSS grid with several columns of something (no matter what is in columns).
What your twig with grid can be in Drupal? The answer is - it can be many other things, like layout,
field formatter, view results, etc. But does it mean you have to create different components per all these?
Not exactly - if your component is flexible enough, so it will be possible to apply it in many different
places - good!

Here is another example. Try to imagine some custom block with very unique design with some images and texts
and so on. Probably nobody know how this component should be organized - means it makes no sense to create this
component without discussions, because you are not sure.

However, it was recommended usage. But you also may not use UI Patterns, storybook, 
components in generated theme at all. If you want to not use integration we have developed,
you can just use `css` folder for storing styles, `js` folder for storing `javascript`, and use
regular drupal practice to develop themes (so as usual).

### Now more about structure of theme

- Source CSS and JS files have suffix `.src`
- Styles required only by Drupal can be added into `css` folder. For example styles for administrative toolbar - we don't want to take care about such components in storybook. So toolbar overrides can be done only for drupal - that's why `css` and `js` folders were created in the root of theme.
- Generated styles and scripts doesn't have `.src` suffix. So normally you should never touch generated assets.
- `.storybook` folder for storing storybook stuff. If you don't use storybook on your project - feel free just remove this folder.
- `favicon` folder contains generated favicons for different browsers. You can generate your custom favicon [this way](###sdf)
- `fonts` folder for storing project fonts
- `images/svg` folder for storing source svg assets. Pay attention to `images/sprite.svg` - this file is auto-generated, so you shouldn't modify it normally. [Read more](##) how to generate svg sprite
- `templates` folder contains two sub-folders. One of them is `overrides` - this folder is for drupal's twig overrides. And `components` folder for storing components required by our integration.

### How to create new component

Run `yarn cc` or via docker `docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn cc`
and follow instructions in console.

New component will be added in `templates/components/**` folder. Read more about [component generator](https://www.npmjs.com/package/@skilld/kaizer-component-generator).

### How to compile styles and scripts

Simply run `yarn build` or via docker `docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn build`

It will compile all assets from all components and `css` and `js` folders in root of theme. Compiled assets
are living near to sources. So we don't have `dist` or `app` folder.

If you are not using storybook and store your assets only in `css` and `js` folders in root of theme, 
you can speed up build by using `yarn build:theme` command or via docker 
`docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn build:theme`.

If you want to compile only components you can use command `yarn build:components` or via docker
`docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn build:components`.

### How to run and compile storybook

To run storybook on local port run `yarn storybook` or via docker 
`docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn storybook`

To compile storybook in the static assets run `yarn build:storybook`

### Linting

Linting and auto-fixers are already included in `build` command. So normally if you are using 
`yarn build` or `docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn build`
commands - it's already enough. But if for some reason you want to just lint assets without `build` task
simply run `yarn lint` command (or via docker `docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn lint`).
And if you want to auto-fix linting errors, run `yarn lint:fix` (or via docker 
`docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn lint:fix`)

All warnings are interpreting by all kind of linters as errors, because everyone want to have clear theme.
So if you are using CI or some custom scripts before `git commit` or something, which are linting sources - you
will get failed results in case of `warnings`.

### How to generate svg sprite

Source svg icons should be stored in `images/svg` folder. Compiled svg sprite lives in `images/sprite.svg`.

To generate svg sprite from source icons just run `yarn sprite` or via docker 
`docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn sprite`

Svg sprite generation is a rare task, so it's not included in `build` command, because it takes time,
and probably you will need to generate or re-generate svg sprite just only several times for entire project.

 ---- Usage of svg sprite ---

### How to remove unnecessary trash from source svg files

Sometimes source icons can have weird structure inside and many useless attributes and techniques 
for web usage. If you need to tidy up svg file - simply run `FILE=icon-name.svg yarn svg-fix` or via
docker `docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine FILE=icon-name.svg yarn svg-fix`

If you need to manage them all - run `yarn svg-fix:all` or via docker 
`docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn svg-fix:all`

### How to generate new favicon

You have to have your favicon in vector graphic format named `favicon.svg`. Put this file in
the root of theme and just run `yarn favicon` or via docker
`docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine yarn favicon`

Wait a big and new favicons will be added into `favicon` folder.
Then clear cache in drupal new favicons will be automatically applied in drupal
because of `page_attachments_alter` drupal hook in `themename.theme` file.

## Components

In components we are using [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) approach.

Component folder and files inside has atomic prefixes:
- `a` - Atom
- `h` - Helper
- `m` - Molecule
- `o` - Organism
- `t` - Template
- `p` - Page

These prefixes allows us:
- To be sure our custom component will never override drupal's native twig suggestions. For example if drupal's twig suggestion is `select.html.twig` - twig in our component will have name `a-select.html.twig`. So there is no collisions.
- To better group components. It's an natural awareness when you know that molecule contains atoms for example, but not vice versa. And in storybook we have sidebar where components are grouped per their atomic type.
- To understand which order should be in DOM tree for css and js assets. For example if `a-component-name` is loaded in DOM tree after some molecule or organism - probably it shouldn't be like this, because high risk styles of atom will override styles of more high-level component. And by the way loading of assets in storybook is built by this principle.

Every component folder contains several files inside:
- `.src.css` and it's compiled version `.css`
- `.src.js` and it's compiled version `.js`. By the way in these js files we initially have code wrapped by Drupal's behavior. Drupal's `settings` are also available and `context`.
- `.yml` - configuration of component. [Read more](lesha_link!!) about our integration to understand what should be in `.yml` files. After installaion you also will have multiple pre-installed components, so it will simplify process of learning for you.
- `.stories.js` - for storybook needs. Initially such files contains everything you will need to build any component.
- `.html.twig` - twig of component. By the way `attributes` variable is always available in any component by default. Other fields and settings you can declare in `.yml` file or describe them in `.stories.js`

Read more about [component generator](https://www.npmjs.com/package/@skilld/kaizer-component-generator) and explanation of each file in component.

If you are not too much familiar with Drupal or just don't know what your current component will be in 
Drupal - just put your component in `templates/components/storybook` folder. And later when functionality
of your component will be confirmed in Drupal - backender can fix `.yml` file and drag'n'drop your component from `storybook` 
folder into some other folder (depending on type of integration will be taken).

Goal of any project - is to build maximum amount of re-usable components. Which means - in the end of 
project `storybook` folder should be empty. So each component should be somehow associated with the specific
type of integration. However you will always have unclear and/or complicated components, like dialogs
or autocompletes or ajax throbbers which will be partially integrated in drupal (for example only css 
file of component will be re-used by drupal only), because drupal is huge and it's not so easy
sometimes to override its stuff (especially make it accessible in storybook).

We also using [Components](https://www.drupal.org/project/components) drupal module for namespaces.
Our goal was to build such namespaces ones that any component will be drag'n'droped from any to any
folders - and you won't need to change twig names or change paths in twig and yml configuration, etc.
So after moving your component through `layouts`, `storybook`, `suggestions`, `theme`, `ui_patterns` 
folders you don't need to change anything (except of `.yml` files of course).

## License

This project is licensed under the MIT open source license.
