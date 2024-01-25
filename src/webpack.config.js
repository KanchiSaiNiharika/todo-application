const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "http": require.resolve("stream-http"),
      "fs": false  // or use require.resolve("fs") if needed
    }
  }
  // ... other configurations if needed
};
