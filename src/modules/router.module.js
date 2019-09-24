const posts = require('../routes/post.route');

module.exports = app => {
  console.log('ROUTER MODULE STARTED');

  // POSTS
  app.use('/api', posts);
};