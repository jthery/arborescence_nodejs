const sequelize = require('../models').sequelize;
const Post = require('../models').posts;


const models = {
  Post
};

const db = {
  models,
  sequelize,
};

module.exports = db;