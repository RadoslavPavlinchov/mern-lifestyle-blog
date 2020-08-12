const { Article, User } = require('../models');

module.exports = {
    get: {
        all: (req, res, next) => {
            const length = req.query.length ? parseInt(req.query.length) : 6;

            Article.find().limit(length).sort('-createdAt').populate('creator')
                .then((articles) => res.send(articles))
                .catch(next);
        },

        details: (req, res) => {
            const id = req.params.id
            Article.findById(id).populate('creator')
                .then(article => {
                    res.send(article)
                }).catch(err => {
                    console.log(err);
                })
        },

        edit: (req, res) => {
            const { id } = req.params;
            Article.findById(id)
                .then(article => {
                    res.send(article)
                }).catch(err => {
                    console.log(err);
                })
        },

        delete: (req, res, next) => {
            const { id } = req.params;
            Article.findByIdAndRemove(id)
                .then((article) => {
                    res.send(article)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        like: (req, res) => {
            const { id } = req.params;
            const { _id } = req.user;

            Article.findByIdAndUpdate(id, { $push: { likes: _id } }, { new: true })
                .then((result) => {
                    res.send(result)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        unlike: (req, res) => {
            const { id } = req.params;
            const { _id } = req.user;

            Article.findByIdAndUpdate(id, { $pull: { likes: _id } }, { new: true })
                .then((result) => {
                    res.send(result)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        comment: (req, res) => {
            const { id } = req.params;
            const { _id } = req.user;
            const { username } = req.user;

            const { comment } = req.body;
            comment.postedBy = _id;
            comment.name = username;

            Article.findByIdAndUpdate(id, { $push: { comments: comment } }, { new: true })
                .sort('createdAt')
                .populate('comments.postedBy')
                .populate('postedBy', '_id username')
                .then((result) => {
                    res.json(result)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        uncomment: (req, res) => {
            const { id } = req.params;
            const { comment } = req.body;

            Article.findByIdAndUpdate(id, { $pull: {comments: {_id: comment._id}} }, { new: true })
                .then((result) => {
                    res.send(result)
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },
    post: {
        create: (req, res) => {
            const { _id } = req.user;

            const {
                title,
                article,
                image,
                category
            } = req.body;

            Article.create({ title, article, image, category, creator: _id })
                .then(article => {
                    return Promise.all([
                        User.updateOne({ _id }, { $push: { createdArticles: article } }),
                        Article.findOne({ _id: article._id })
                    ]);
                }).then(([modifiedObj, article]) => {
                    res.send(article);
                }).catch((err) => {
                    console.log(err)
                })
        },

        edit: (req, res) => {
            const { id } = req.params;

            const {
                title,
                image,
                category
            } = req.body;

            Article.findById(id)
                .then(article => {
                    article.title = title;
                    article.article = req.body.article;
                    article.image = image;
                    article.category = category

                    article
                        .save()
                        .catch(() => {
                            res.json('Article updated successfully');
                        })
                        .catch(err => {
                            res.status(400).json(`Error: ${err}`);
                        })
                })
                .catch(err => {
                    res.status(400).json(`Error: ${err}`);
                })
        },

    }
}