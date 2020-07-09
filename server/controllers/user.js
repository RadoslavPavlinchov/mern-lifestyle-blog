const { User } = require('../models');
const jwt = require('../utils/jwt');

const { cookie } = require('../config/config');

module.exports = {
    get: {
        login: (req, res, next) => {

        },
        register: (req, res, next) => {

        },
        logout: (req, res, next) => {
            res.clearCookie(cookie)

        }
    },
    post: {
        login: (req, res, next) => {
            const { username, password } = req.body;

            User.findOne({ username })
                .then(user => {
                    Promise.all([user, user.matchPassword(password)])
                        .then(([user, match]) => {
                            if (!match) {

                                return;
                            }
                            const token = jwt.createToken({ id: user._id });

                            res.cookie(cookie, token, { maxAge: 3600000 })

                        })
                })
        },
        register: (req, res, next) => {
            const { username, password, repeatPassword } = req.body;

            if (password !== repeatPassword) {

                return;
            }

            User.create({ username, password })
                .then(registeredUser => {
                    const token = jwt.createToken({ id: registeredUser._id });

                    res.cookie(cookie, token, { maxAge: 3600000 })

                }).catch((err) => {
                    if (err.name === 'MongoError') {
                        return;
                    }
                })
        }
    }
}