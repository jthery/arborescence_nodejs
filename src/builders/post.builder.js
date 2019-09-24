const db = require('../config/db.config');

module.exports.findPosts = function () {
    return new Promise(async (resolve, reject) => {
      try {
        const posts = await db.models.Post.findAll();
        resolve(posts);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };