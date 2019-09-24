const postService = require('../services/post.service');

exports.getPosts = async (req, res) => {
    try {
        let data = await postService.get_posts();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err).send(err.message);
    }
};
