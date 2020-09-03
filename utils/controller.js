module.exports = {
    getTopic: function(e) {
      return require("topic_" + e + ".js");
    }
};