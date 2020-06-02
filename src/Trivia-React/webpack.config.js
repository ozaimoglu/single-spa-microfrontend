const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "trivia",
    webpackConfigEnv
  });


  return webpackMerge.smart(defaultConfig, {
    // customizations can go here
    module: {
        rules: [
            {
                test: /\.(sass|css|scss)$/,
                use: [
                  'style-loader',
                  'css-loader',
                  {
                    loader: "postcss-loader",
                    options: {
                      plugins: () => [
                        require("autoprefixer")()
                      ],
                    },
                  },
                  'sass-loader',
                ]
              },
        ]
    },
  });
};