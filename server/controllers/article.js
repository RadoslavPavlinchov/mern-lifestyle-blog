const { Article, User } = require('../models');

module.exports = {
    get: {
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
            const { title, description, imageUrl } = req.body;

            Article.create({ title, description, imageUrl, creator: req.user._id })
                .then(article => {

                    req.user.createdArticles.push(article._id);
                    return User.updateOne({ _id: req.user._id }, req.user);

                }).then(() => {

                }).catch((err) => {
                    console.log(err)
                })
        },

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