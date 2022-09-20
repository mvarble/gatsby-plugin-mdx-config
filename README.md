This is basically a wrapper for the mdx config in Gatsby MDX.
A solution I don't quite like: since ESM is not supported in Gatsby configs, and Typescript configs resolve async imports weirdly, I am just using Webpack to bundle the ESM modules into a massive CommonJS module.
