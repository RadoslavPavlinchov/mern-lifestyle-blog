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
                .then(() => {

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
            let { title, description, imageUrl } = req.body;

            Article.create({ title, description, imageUrl, creator: req.user._id })
                .then(article => {

                    req.user.createdArticles.push(article._id);
                    return User.updateOne({ _id: req.user._id }, req.user);

                }).then(() => {

                }).catch((err) => {
                    if (err.name === 'MongoError') {
                        // res.render('article/create', { message: 'Article already exists!' });
                        return;
                    }
                })
        },

        edit: (req, res) => {
            const { id } = req.params;
            let { title, description, imageUrl } = req.body;

            Article.findByIdAndUpdate({ _id: id }, { title, description, imageUrl })
                .then(() => {
                    
                })
                .catch(err => {
                    console.log(err);
                })
        },

    }
}