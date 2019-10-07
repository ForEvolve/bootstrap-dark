# Bootstrap 4 Dark theme

Bootstrap 4 dark theme that supports togging dark/light themes as well. There is no fluff, it changes the color of Bootstrap and that's it, no new thing to learn or unlearn, just Bootstrap, but Dark!

![VSTS build badge](https://forevolve.visualstudio.com/_apis/public/build/definitions/c685c54e-c04f-4c62-9e82-db39a452f4d9/22/badge)

## Alpha - preview

![Alpha - preview](assets/images/alpha-3.png)

_This is a work in progress, if you like it and have some spare time, contributions are welcome._

## Versioning

SemVer is used to keep things easy for everyone.

### Prerelease

Until the project reaches an official version `1.0.0`, the pre-release `-alpha.[build number]` suffix is added to the version number.

Since this is only a dark version of Bootstrap, there should not be many breaking changes worth investing in versioning. So don't worry too much about compatibility, updating to the latest `alpha` release should be safe enough.

If this is a major concerns to you, feel free to say so, and I'll see what I can do about it.

## How to use

Official builds are available in the public npm registry.

```
npm install @forevolve/bootstrap-dark --save
```

The package contains the content of the `dist` directory which includes the Bootstrap JavaScript files, for convenience, and the Bootstrap Dark CSS files.
To load the dark theme, `<link>` the `bootstrap-dark.css` or the `bootstrap-dark.min.css` instead of the `bootstrap[.min].css` file.

### Dark/Light toggle

You can now `<link>` both the `toggle-bootstrap.css` and the `toggle-bootstrap-dark.css` files to allow toggling the normal/dark theme based on your page body.

-   To display the original Bootstrap color, apply the `bootstrap` class on your body, like `<body class="bootstrap">`.
-   To display the Bootstrap Dark theme, apply the `bootstrap-dark` class on your body, like `<body class="bootstrap-dark">`.

### CI builds

The CI builds are deployed to the following custom npm registry: <https://www.myget.org/F/forevolve/npm/>.

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

## Patch notes

### 1.0.0-alpha.844

-   Update the project description, the "How to use" section, and add the "Patch notes" section

### 1.0.0-alpha.842

-   Add support for dark/light toggling

### 1.0.0-alpha.774 & 1.0.0-alpha.723

-   Initial dark theme

## References

-   [Bootstrap](https://github.com/twbs/bootstrap/)

## More darkness!

The following project applies `bootstrap-dark` to the bootstrap documentation site allowing deeper testing of the theme:

-   [Bootstrap 4 Dark theme docs](https://github.com/ForEvolve/bootstrap-dark-docs.git)

## Special thanks

I started this project based on the [Bootstrap Theme Kit](https://hackerthemes.com/kit/) by [Alexander Rechsteiner](https://github.com/arechsteiner) at [Hacker Themes](https://hackerthemes.com). This allows me to publish a lighter version of the theme; making it easier to be used (compared to the full Bootstrap Jekyll docs).
