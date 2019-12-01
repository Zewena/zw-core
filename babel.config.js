module.exports = api => {
  api.assertVersion(7);
  api.cache(false);

  const presets = [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        modules: false,
        debug: true,
        useBuiltIns: "usage",
        corejs: 3
      }
    ]
  ];
  const plugins = [
    ["@babel/transform-runtime", { corejs: 3 }],
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/proposal-pipeline-operator", { proposal: "fsharp" }],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }]
  ];

  return { presets, plugins };
};