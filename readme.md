# Bootstrap 4 Dark theme

Bootstrap 4 dark theme that supports togging dark/light themes as well. There is no fluff, it changes the color of Bootstrap and that's it, no new thing to learn or unlearn, just Bootstrap, but Dark!

![VSTS build badge](https://forevolve.visualstudio.com/_apis/public/build/definitions/c685c54e-c04f-4c62-9e82-db39a452f4d9/22/badge)
[![npm](https://img.shields.io/npm/v/@forevolve/bootstrap-dark)](https://www.npmjs.com/package/@forevolve/bootstrap-dark)
[![peerDependencies Status](https://img.shields.io/david/peer/forevolve/bootstrap-dark.svg)](https://david-dm.org/forevolve/bootstrap-dark?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/forevolve/bootstrap-dark.svg)](https://david-dm.org/forevolve/bootstrap-dark?type=dev)

## Alpha - preview

![Many controls](assets/images/localhost_7051_.png)
![Typography](assets/images/localhost_7051_Typography.png)
![Forms](assets/images/localhost_7051_Forms.png)
![Jumbotron](assets/images/localhost_7051_Jumbotron.png)
![ListGroup](assets/images/localhost_7051_ListGroup.png)
![Tables](assets/images/localhost_7051_Tables.png)
![Toasts](assets/images/localhost_7051_Toasts.png)
![Cards](assets/images/localhost_7051_Cards.png)

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
To load the dark theme, `<link>` the `bootstrap-dark.css` or the `bootstrap-dark.min.css` instead of the `bootstrap[.min].css` file. You can load the bundled JavaScript files, the original ones or the file from the CDN of your choosing.

**Example:**

```html
<link rel="stylesheet" href="/css/bootstrap-dark.min.css" />
```

### Dark/Light toggle

You can now `<link>` both the `toggle-bootstrap.css` and the `toggle-bootstrap-dark.css` files to allow toggling the normal/dark theme based on your page body.

-   To display the original Bootstrap color, apply the `bootstrap` class on your body, like `<body class="bootstrap">`.
-   To display the Bootstrap Dark theme, apply the `bootstrap-dark` class on your body, like `<body class="bootstrap-dark">`.

If you want to support print, load the `toggle-bootstrap-print.css` or `toggle-bootstrap-print.min.css` file after the others.

**Example:**

```html
<link rel="stylesheet" href="/css/toggle-bootstrap.min.css" />
<link rel="stylesheet" href="/css/toggle-bootstrap-dark.min.css" />
<link rel="stylesheet" href="/css/toggle-bootstrap-print.min.css" />
```

### Themeable .navbar

When using the `toggle-*` stylesheets, you can create `.navbar` that uses the current theme. Light when `<body class="bootstrap">` and dark when `<body class="bootstrap-dark">`.

Example, instead of `navbar-light bg-light` or `navbar-dark bg-dark`, use `.navbar-themed`, like this:

```html
<nav class="navbar navbar-expand-lg navbar-themed">
    ...
</nav>
```

### CI builds

The CI builds are deployed to the following custom npm registry: <https://www.myget.org/F/forevolve/npm/>.

## How to build

If you want to build the theme manually, modify it or even contribute, this section explains how.

### Prerequisites

1. You need `npm` to build this project; see [Node JS](https://nodejs.org/en/) for more info.
1. You need .NET Core 2; see [.NET Core Downloads](https://www.microsoft.com/net/download/Windows/build) for more info.

### Getting started

1. Clone this repo
1. Run `npm install`
1. Go to the _app_ directory (`cd app`)
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

## The project structure

-   `app` is the Asp.Net Core application that is used to test the theme. This directory is not packaged.
    -   `Pages` are the Asp.Net Core Razor Pages. That's the preview.
        > **Why .NET Core?** Well, I wanted to script some loops, and I know .Net; so I picked Razor Pages to do just that: dynamic pages! Moreover, it is open source and cross-platform.
        >
        > If you think that something else would be better, feel free to open an issue about it; I would not mind switching to another technology (see the Contribute section below).
    -   `Services` are the web pages services; so far it's pretty thin.
    -   `wwwroot` are the web assets; the `dist` files are copied there.
-   `assets` are the project assets (like the screenshot in the readme file).
-   `dist` are the redistributable files; if you want to copy/paste the files into your projects, that's the ones. They also include bootstrap JavaScript files, unaltered.
-   `scss` are the source theme files.
-   Other files (root): npm, license, readme, etc.

## Contribute

To contribute, start by opening an issue or reply on an existing issue so we can discuss your feature or bug to find the best way to approach it.

Once we settled on a strategy, you can then Fork/Code/Open a PR.

-   Please add yourself in the `package.json` `contributors` array.
-   Please keep PR focused on a single feature, it is easier for everyone this way and it helps keep the conversation focused. I way prefer multiple smaller PR than a single huge one.

Thanks in advance for your contribution.

See [Contributing to ForEvolve open source projects](https://github.com/ForEvolve/Toc/blob/master/CONTRIBUTING.md) and [Contributor Covenant Code of Conduct](https://github.com/ForEvolve/Toc/blob/master/CODE_OF_CONDUCT.md) for more information.

## Release notes

Since CI build numbers are automated, it is hard to know in advance what the next deployed build number will be, so the `(latest)` version represent that version.

### 1.0.0-alpha.(latest)

-   Fix form validation feedback to address issue #40
-   Add another form sample

### 1.0.0-alpha.1089

-   Add table examples
-   Fix form validation without `.was-validated` #40

### 1.0.0-alpha.1087

-   Update Bootstrap to 4.5.0
-   Update dependencies to fix vulnerabilities
-   Fix form validation #40

### 1.0.0-alpha.1075

-   Remove `p a` `text-decoration: underline;`
    -   This was conflicting with `.btn` in `p`.
    -   Moreover, Bootstrap does not implement such a thing so bootstrap-dark should not either.

### 1.0.0-alpha.978

Darken the following elements:

-   Dropdown
-   Select
-   Breadcrumb
-   Pagination

### 1.0.0-alpha.974

-   Update Bootstrap to 4.4.1
-   Update other dependencies

### 1.0.0-alpha.937

-   Darken Toasts

### 1.0.0-alpha.902

-   Update `<hr />` color

### 1.0.0-alpha.899

-   Utilities (borders)
    -   Update the default `$border-color` to `$dark`
-   Tables
    -   Enforce that `$table-border-color` is based on the new `$border-color`
    -   Enforce that `$table-color` is based on `$body-color`
    -   Enforce that `$table-hover-color` is based on `$table-color`
-   Jumbotron
    -   The `$jumbotron-bg` color is now used

### 1.0.0-alpha.888

-   Add a themeable `.navbar` component, using the css class `.navbar-themed`, that:
    -   When `body.bootstrap`, the navbar becomes `.bg-light` and `.navbar-light`.
    -   When `body.bootstrap-dark`, the navbar becomes `.bg-dark` and `.navbar-dark`.

### 1.0.0-alpha.863

-   Move the print import out of the dark/light body class. This should fix bugs like `.navbar` being `display: none` by default when loading the `.min.css` stylesheet.
-   A new file is introduced: `toggle-bootstrap-print[.min].css`. This stylesheet applies the print styles from bootstrap and has been extracted so it is included only once (not once with the `toggle-bootstrap.css` and once with the `toggle-bootstrap-dark.css`). If you don't support print, you can omit this file; if you do, include it last. For example:

    ```html
    <link rel="stylesheet" href="/css/toggle-bootstrap.min.css" />
    <link rel="stylesheet" href="/css/toggle-bootstrap-dark.min.css" />
    <link rel="stylesheet" href="/css/toggle-bootstrap-print.min.css" />
    ```

### 1.0.0-alpha.845

-   Update the project description, the "How to use" section, and add the "Release notes" section

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
