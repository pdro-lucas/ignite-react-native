module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/app/components",
            "@routes": "./src/app/routes",
            "@screens": "./src/app/screens",
            "@storage": "./src/storage",
            "@theme": "./src/app/theme",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
