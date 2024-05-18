// // webpack.config.js

// module.exports = {
//   // other webpack configuration
//   resolve: {
//     fallback: {
//       "stream": require.resolve("stream-browserify"),
//       "crypto": require.resolve("crypto-browserify"),
//       "querystring": require.resolve("querystring-es3"),
//       "http": require.resolve("stream-http"),
//       "https": require.resolve("https-browserify"),
//       "fs": false, // or use appropriate polyfill if needed
//       "os": require.resolve("os-browserify/browser"),
//       "zlib": require.resolve("browserify-zlib")
//     }
//   }
// };
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),

    // other webpack configuration
    resolve: {
      fallback: {
        "stream": require.resolve("stream-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "querystring": require.resolve("querystring-es3"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "fs": false, // or use appropriate polyfill if needed
        "os": require.resolve("os-browserify/browser"),
        "zlib": require.resolve("browserify-zlib")
      }
    }
  },
  
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
