"use strict";
const servicePath = require("./servicesPath.json");

const loadFile = (path) => {
  return require(`../services/${path}`);
};

const dataSourceAPIMongo = () => {
  const { datasource } = servicePath[0];
  const Posts = loadFile(datasource.postsAPI.path);
  return new Posts(datasource.postsAPI.baseURL);
};

const callDatasource = () => {
  return {
    postsAPI: dataSourceAPIMongo(),
  };
};

module.exports = callDatasource;
