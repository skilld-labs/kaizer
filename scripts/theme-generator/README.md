ＫΛＩＺΞＲ

This is theme generator for [Drupal](https://www.drupal.org/).


# Hey btw! A massive integration of storybook components in drupal using this generator.

We have built an awesome integration of storybook's components in drupal. [Read more](lesha_link!!)

(Soon) Video tutorial explaining this <strong>theme generator</strong>, [Component generator](https://www.npmjs.com/package/@skilld/kaizer-component-generator), and [Component connector](https://www.drupal.org/sandbox/gaydabura/3361207) module

## Why you need this?

It can give you next benefits:

<strong>For a company in long term strategy.</strong>

1. <strong>Much less time development of drupal websites will take.</strong> We are estimating a 30% reduction in the total time to develop a site of any complexity comparing to what you had before.
2. Storybook under the hood. We went through it from beginning till the end. Your customers will be happy to see lots of progress already in the beginning of project. Since for frontender to build a whole storybook with your unique design system will take 90% less time than to build drupal web-site. Customers loves visual effect which storybook can give. Methodology of doing storybook is well described [below](Below).
3. Your drupal developers will know drupal much more than before due to complexity of approach we have created.
4. New era in contribution in drupal opened.

<strong>For a regular drupal developer</strong>
1. All the well known features partially coming from drupal core under the hood: postCSS, Javascript ES6, linting processes. Also many other very helpful features: [read below]().
2. Well known structure of theme, similar to drupal core themes.
3. Powerful and modern tools: vite, storybook - everything to make your life easier. 

## Goals and why we sure you tried to find such theme generator your entire life.

A massive theme generator to which we have been going for 7 years step by step. And finally - welcome.

It will be long read for you, because a big amount of technical information. I hope you will enjoy it. You all know how it feels like when you switching between lots of projects during your career with different theme structures, possibilities, and what's most important - level and quality of delivering front-end to Drupal.

Drupal allows users to do so many things with so many different ways and it creates a mess from project to project. As a good developer you want to have the same set of tools on all projects, but it's always different, because there is no clear strategy regarding how to make drupal's web-sites with the best way. There is no best way, because Drupal is very flexible, and using one or another approach can be logically described.

However, what we absolutely sure today - is that <strong>on drupal projects we have to make drupal themes</strong>. So we have to pay respect to all set of core tools Drupal allows us to use for theme. Knowing all that - we can develop a clear strategy about what theme generator should deliver.

Continue speaking about goals of our theme generator - we asked ourselves what are we expecting from drupal theme?

1. postCSS - preferred tool for transformation of modern css, picked by drupal core community few years ago. It's making sense to follow them.
2. JavaScript ES6
3. Linting of everything with the same tools Drupal core have and with the same configuration of linters?

Ok, what else frontenders loves so much last several years? Component's approach becomes very popular! But what are our components in drupal?
Here is where we have stuck in the beginning of our huge initiative. 

Everyone can create a folder named `my-component` in Drupal theme and put there `.css`, `.js` and even `.twig` files, but for drupal it's just nothing initially. Noising folders with unclear goals of why it's created. Of course we can declare a drupal library in `themename.libraries.yml` file and attach there our `.css` and `.js` files. And we also can somehow deliver our custom `my-component.html.twig` file in drupal literally or figuratively.

And then we found a revolutioning initiative for Drupal called [UI Patterns](https://www.drupal.org/project/ui_patterns). In short - this initiative allows your component be something in drupal only by providing simple yml file with several lines of code. However, `UI Patterns` can't solve many other problems:
1. What to do with Drupal core's theme hooks with core twig templates? Every drupal developer even with minimal experience knows what is `form-element.html.twig` or `input.html.twig` or `page.html.twig` or `views-view.html.twig`. So if i will create my component called `my-page` with css, js and twig - how to connect it to drupal? With the old fashioned way.
2. `UI Patterns` potentially can damage server performance, so you shouldn't use it everywhere where possible. Better explanation you can find [here](lesha_link!!)... No, really! You have to [read it](lesha_link!!)!

As a result of all these - we took care about massive integration of components in drupal. Now you can put `.yml` file with small description into your component and drupal will see your component immediately! It will load your custom twig file where need, it will load all the css/js related assets you will declare, component settings, fields (aka. layout's regions), etc. The structure of yml configuration is similar to [UI Patterns documentation](https://ui-patterns.readthedocs.io/en/8.x-1.x/).
Moreover - in this theme generator you will find a lot of base components (or examples, up to you) which exist on every single project, [more details below](BELOW).


## Features your generated theme will have

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

## Installation

Our plans are to create contrib starterkit theme and put it on drupal.org, so you will be able to generate sub-theme using [starterkit-theme](https://www.drupal.org/docs/core-modules-and-themes/core-themes/starterkit-theme).
However php script `generate-theme` is not well working, so it's not fitting our requirements for now and we need to polish it first.

But already today you can install your new drupal theme from our generator using:
1. npx command - `npx @skilld/kaizer-theme-generator`
2. or via docker - `docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine npx @skilld/kaizer-theme-generator`

After execution of one of those commands - just follow instructions in console.





WIP
## Usage

1. `cd web/themes/custom`
2. `npx @skilld/kaizen-tg`
3. `cd [theme_name]`
4. `yarn install`

## Compilation

Run `yarn build` from theme dir

## Components creation

Run `yarn cc` from theme dir

## Storybook

Run `yarn storybook` from theme dir

## Linting and fixing

Run `yarn lint-fix` from theme dir

## Other kaizen's packages, included into `kaizen-tg` package.
1. [kaizen-cg](https://www.npmjs.com/package/@skilld/kaizen-cg)
2. [kaizen-core](https://www.npmjs.com/package/@skilld/kaizen-core)
3. [kaizen-breakpoints](https://www.npmjs.com/package/@skilld/kaizen-breakpoints)

# License

This project is licensed under the MIT open source license.
