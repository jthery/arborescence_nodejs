const postBuilder = require('../builders/post.builder');

module.exports.get_posts = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const posts = await postBuilder.findPosts();
        resolve(posts);
      } catch (err) {
        reject({
          status: 500,
          message: err
        });
      };
    });
  };