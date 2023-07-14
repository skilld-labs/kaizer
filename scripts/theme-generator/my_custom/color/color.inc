<?php

/**
 * @file
 * Lists available colors and color schemes.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'color-white' => t('White'),
    'color-black' => t('Black'),
    'color-dark-grey' => t('Dark grey'),
    'color-grey' => t('Grey'),
    'color-grey-light' => t('Grey Light'),
    'color-danger' => t('Danger'),
    'color-success' => t('Success'),
    'color-warning' => t('Warning'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Functional Palette'),
      'colors' => [
        'color-white' => '#fff',
        'color-black' => '#000',
        'color-dark-grey' => '#9c9c9c',
        'color-grey' => '#dedede',
        'color-grey-light' => '#efefef',
        'color-danger' => '#f00',
        'color-success' => '#4bb543',
        'color-warning' => '#f0ad4e',
      ],
    ],
  ],

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => [
    'color/colors.css',
  ],

  'preview_library' => 'my_custom/color.preview',
  'preview_html' => 'color/preview.html',

  // Files to copy.
  'copy' => [
    'logo.svg',
  ],
];
