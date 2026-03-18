module.exports = {
  Asset: {
    fromModule: () => ({
      uri: "data:text/plain,This is a test sample essay.",
      localUri: "data:text/plain,This is a test sample essay.",
      downloadAsync: async function () {
        return this;
      }
    })
  }
};
