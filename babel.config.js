module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ["@babel/preset-react", {runtime : "automatic" }], //helping out testing library to convert the jsx code to HTML sp it can read porperly.
    ],
  };