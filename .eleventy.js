const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addWatchTarget('./styles/main.css')
    eleventyConfig.addWatchTarget('./styles/tailwind.config.js')

    eleventyConfig.addPassthroughCopy({ './_tmp/main.css': './main.css' })
    eleventyConfig.addPassthroughCopy("src/img")
    
    return {
        dir: {
            input: "src",
            output: "dist"
        },
    };
};