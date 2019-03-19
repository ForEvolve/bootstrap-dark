# Bootstrap 4 Dark theme

This is a Bootstrap 4 dark theme.

![VSTS build badge](https://forevolve.visualstudio.com/_apis/public/build/definitions/c685c54e-c04f-4c62-9e82-db39a452f4d9/22/badge)

## Alpha - preview

_This is a work in progress..._

![Alpha - preview](assets/images/alpha-3.png)

## How to use

Official builds are available in the public npm repository.

```
npm install @forevolve/bootstrap-dark --save
```

The CI builds are deployed to the following custom npm registry: <https://www.myget.org/F/forevolve/npm/>.

> TODO: write a better guide...

## How to build

If you want to build the theme manually, modify it or even contribute, this section explains how.

### Prerequisites

1. You need `npm` to build this project; see [Node JS](https://nodejs.org/en/) for more info.
1. You need .NET Core 2; see [.NET Core Downloads](https://www.microsoft.com/net/download/Windows/build) for more info.

### Getting started

1. Clone this repo
1. Go to the _app_ directory (`cd app`)
1. Run `npm install`
1. Run `dotnet restore`

### Starting the project

1. Run `dotnet run` (from the _app_ directory) or if you are using VS Code, `Start Debugging` will work.
1. Run `npm run watch`

Once you started both server and the watch command, the `browser-sync` proxy should open in a browser at the following URI: `http://localhost:3002`.

### Other build info

There is a few npm and gulp scripts.

#### npm scripts

1. `gulp-watch` simply runs `gulp watch`
1. `browser-sync-proxy` starts browsersync watching for any `wwwroot/css/*.css` changes
1. `watch` run both previous scripts in parallel

#### gulp scripts

1. `build-theme` compile the theme to css.
1. `copy-dist-to-wwwroot` copy the `dist` folder content to `wwwroot` (used by web pages).
1. `copy-bootstrap-js` copy the bootstrap js files to the `dist/js` directory.
1. `watch` execute `copy-bootstrap-js` then watch to rebuild the theme.
1. `default` simply runs both `build-theme` and `copy-bootstrap-js`.

### Contribute

To contribute, feel free to contact me.

If you feel confident enough (or if the issue tracker is more populated and I forgot to update this section), feel free to submit a PR.

## The project structure

-   `app` is the Asp.Net Core application that is used to test the theme. This directory is not packaged.
    -   `Pages` are the Asp.Net Core Razor Pages. That's the preview.
        > **Why .NET Core?** Well, I wanted to script some loops, and I know .Net; so I picked Razor Pages to do just that: dynamic pages!
    -   `Services` are the web pages services; so far it's pretty thin.
    -   `wwwroot` are the web assets; the `dist` files are copied there.
-   `assets` are the project assets (like the screenshot in the readme file).
-   `dist` are the redistributable files; if you want to copy/paste the files into your projects, that's the ones. They also include bootstrap JavaScript files, unaltered.
-   `scss` are the source theme files.
-   Other files (root): npm, license, readme, etc.

## References

-   [Bootstrap](https://github.com/twbs/bootstrap/)

## More darkness!

The following project applies `bootstrap-dark` to the bootstrap documentation site allowing deeper testing of the theme:

-   [Bootstrap 4.1 Dark theme docs](https://github.com/ForEvolve/bootstrap-dark-docs.git)

## Special thanks

I started this project based on the [Bootstrap Theme Kit](https://hackerthemes.com/kit/) by [Alexander Rechsteiner](https://github.com/arechsteiner) at [Hacker Themes](https://hackerthemes.com). This allows me to publish a lighter version of the theme; making it easier to be used (compared to the full Bootstrap Jekyll docs).
