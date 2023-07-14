---
to: <%= h.src() %>/<%= h.changeCase.lower(name) %>/vite.build.js
---
const { build } = require('vite');
const { sync } = require('glob');
const { resolve, extname } = require('path');
const watcher = process.argv[2];

const fontExtensions = ['.woff2', '.woff', '.ttf', '.otf', '.eot'];
const imgExtensions = [
  '.svg',
  '.png',
  '.jpeg',
  '.jpg',
  '.gif',
  '.avif',
  '.webp',
];

async function buildPackages() {
  const paths = sync(
    '{*(js|css)/**/*.src*(.js|.css),templates/components/**/*.src*(.js|.css)}',
    {
      ignore: '**/*_*.src.css',
    },
  );
  for (let i = 0; i < paths.length; i++) {
    await build({
      base: '',
      resolve: {
        alias: {
          '@images': resolve(__dirname, '/images'),
          '@fonts': resolve(__dirname, '/fonts'),
        },
      },
      build: {
        watch: watcher ? {} : null,
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
          input: paths[i],
          output: {
            dir: '.',
            banner: `
          /**
            * DO NOT EDIT THIS FILE.
            * It's generated automatically by 'yarn build' command.
            * @preserve
          **/
        `,
            entryFileNames: (sdf) => {
              if (extname(sdf.facadeModuleId) === '.js') {
                return paths[i].replace('.src', '');
              }

              return '.';
            },
            assetFileNames: ({ name }) => {
              const ext = extname(name);
              if (ext === '.css') {
                return paths[i].replace('.src', '');
              }

              if ([...imgExtensions, ...fontExtensions].includes(ext)) {
                const assetInOwnDir = sync(
                  `${paths[i].slice(0, paths[i].lastIndexOf('/'))}/**/${name}`,
                );
                if (assetInOwnDir.length) {
                  return assetInOwnDir[0];
                }
                if (imgExtensions.includes(ext)) {
                  return sync(`images/**/${name}`)[0];
                }
                if (fontExtensions.includes(ext)) {
                  return sync(`fonts/**/${name}`)[0];
                }
              }
            },
          },
        },
      },
    });
  }
}

buildPackages();
