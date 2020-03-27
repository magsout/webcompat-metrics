const presetEnv = [
  "@babel/preset-env",
  {
    targets: {
      node: true,
    }
  }
];

const presetReact = "@babel/preset-react";

const pluginProposalClassProperties = "@babel/proposal-class-properties";

const pluginDynamicImportNode = ["dynamic-import-node", { noInterop: true }];

const pluginInlineReactSvg = "inline-react-svg"

const pluginTransformReactRemoveRropTypes = [
  "transform-react-remove-prop-types",
  {
    "mode": "wrap"
  }
];

const presets = [
  presetEnv,
  presetReact
];

const plugins =  [ 
  pluginProposalClassProperties,
  pluginDynamicImportNode,
  pluginInlineReactSvg
];


module.exports = ({
  env: {
    production: {
      presets: presets,
      plugins: [
        pluginProposalClassProperties,
        pluginDynamicImportNode,
        pluginInlineReactSvg,
        pluginTransformReactRemoveRropTypes,
      ]
    },
    development: {
      presets: presets,
      plugins: plugins,
    },
    test: {
      presets: presets,
      plugins: plugins,
    }
  },
});