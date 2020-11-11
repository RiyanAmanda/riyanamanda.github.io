const mix = require('laravel-mix');

mix.js('src/js/app.js', 'docs/js')
    .sass('src/sass/app.scss', 'docs/css')
    .setPublicPath('docs');