const through = require('through2');
// const PluginError = require('gulp-util').PluginError;
// const util = require('util');
const css = require('css');

const PLUGIN_NAME = 'gulp-css-clean-non-color-attributes';
module.exports = function (options) {
    const attributesNotToRemove = ['color', 'background-color', 'background', 'border', 'border-color'];

    // =========================================================================
    // FUNCTIONS
    // =========================================================================
    // INPUT
    function parseInputCss(inputFile, encoding, options) {
        let fileContent = inputFile.contents.toString(encoding);
        let parsedCss = css.parse(fileContent, options);
        return parsedCss;
    }

    // PARSING
    function removeCssAttributes(parsedCss) {
        parsedCss.stylesheet.rules = mapRules(parsedCss.stylesheet.rules);
        console.log(parsedCss.stylesheet.rules);
        return parsedCss;
    }

    function mapRules(rules) {
        return rules.map((rule) => {
            // only filter rules, the other types are just kept
            if (rule.type === 'rule') {
                rule.declarations = rule.declarations.filter((declaration) => attributesNotToRemove.includes(declaration.property));
            }
            if (rule.type === 'media') {
                rule.rules = mapRules(rule.rules);
            }
            return rule;
        });
    }

    // OUTPUT
    function outputFinalCss(modifiedCss, options) {
        return css.stringify(modifiedCss, options);
    }

    // MAIN
    let transform = function (file, encoding, callback) {
        let parsedCss = parseInputCss(file, encoding, options);
        let modifiedCss = removeCssAttributes(parsedCss, attributesNotToRemove);
        let finalCss = outputFinalCss(modifiedCss, options);
        file.contents = Buffer.from(finalCss);

        // success
        callback(null, file);
    };

    //
    return through.obj(transform);
};
