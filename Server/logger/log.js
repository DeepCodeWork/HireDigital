const {configure, getLogger} = require("log4js");
configure({
  appenders: { cheese: { type: "file", filename: "loggedData.log" } },
  categories: { default: { appenders: ["cheese"], level: "ALL" } }
});
const log = getLogger();

module.exports = log;