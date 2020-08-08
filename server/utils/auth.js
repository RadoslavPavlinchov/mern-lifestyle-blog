const jwt = require('./jwt');
// const { cookie } = require('../config/config');
const { User } = require('../models');

function auth(redirectUnauthenticated = true) {
    return function (req, res, next) {
        const token = req.headers.authorization || '';
        console.log(token)

        jwt.verifyToken(token)
            .then((data) => {
                User.findById(data.id)
                    .then(user => {
                        req.user = user;
                        next();
                    });
            }).catch(err => {
                if (!redirectUnauthenticated) {
                    next();
                    return;
                }
                res.redirect('/user/login')
                next(err);
            });
    };
}

module.exports = auth