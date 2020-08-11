const { Article, User } = require('../models');

module.exports = {
    get: {
        one: (req, res) => {

        },

        all: (req, res, next) => {
            const length = req.query.length ? parseInt(req.query.length) : 6;

            Article.find().limit(length).sort('-createdAt').populate('creator')
                .then((articles) => res.send(articles))
                .catch(next);
        },

        // create: (req, res) => {
        //     console.log(req)
        // },

        details: (req, res) => {
            const id = req.params.id
            Article.findById(id).populate('creator')
                .then(article => {
                    console.log(article)
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
                    console.log('liked !!!')
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
                    console.log('unliked !!!')
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
            // const { _id } = req.user;

            const {
                title,
                // article,
                image,
                category
            } = req.body;

            // Article.findByIdAndUpdate({ _id: id }, { title, article, image, category })
            //     .then((article) => {
            //         return Promise.all([
            //             User.updateOne({ _id }, { $push: { createdArticles: article } }),
            //             Article.findOne({ _id: article._id })
            //         ]);
            //     })
            //     .then(([modifiedObj, article]) => {
            //         res.send(article);
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     })

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