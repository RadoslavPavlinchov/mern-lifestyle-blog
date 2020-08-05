const { Article, User } = require('../models');

module.exports = {
    get: {
        one: (req, res) => {

        },

        all: (req, res, next) => {
            const length = req.query.length ? parseInt(req.query.length) : 20;

            Article.find().limit(length)              // .populate('creator')
                .then((articles) => res.send(articles))
                .catch(next);
        },

        create: (req, res) => {
            console.log(req)
        },

        details: (req, res) => {
            const id = req.params.id
            Article.findById(id)
                .then(article => {

                }).catch(err => {
                    console.log(err);
                })
        },

        edit: (req, res) => {
            const { id } = req.params;
            Article.findById(id)
                .then(article => {

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

            Promise.all([
                Article.updateOne({ _id: id }, { $push: { usersLiked: _id } }),
                User.updateOne({ _id }, { $push: { likedArticles: id } })
            ]).then(() => {

            })
        },
    },
    post: {
        create: (req, res) => {
            const {
                title,
                article,
                image,
                category 
            } = req.body;

            Article.create({ title, article, image, category })
                .then((article) => {
                    res.send(article);
                }).catch((err) => {
                    console.log(err)
                })
        },

        // post: {
        //     create: (req, res) => {
        //         const { title, imageUrl } = req.body;

        //         Article.create({ title, imageUrl, creator: req.user._id })
        //             .then(article => {
        //                 return Promise.all([
        //                 User.updateOne({ _id }, { $push: { createdArticles: article } }),
        //                 Article.findOne({ _id: article._id })
        //             ]);
        //     }).then(([modifiedObj, article]) => {
        //         res.send(article);
        //     }).catch((err) => {
        //         console.log(err)
        //     })
        // },

        edit: (req, res) => {
            const { id } = req.params;
            let { title, description, imageUrl } = req.body;

            Article.findByIdAndUpdate({ _id: id }, { title, description, imageUrl })
                .then((article) => {
                    res.send(article)
                })
                .catch(err => {
                    console.log(err);
                })
        },

    }
}