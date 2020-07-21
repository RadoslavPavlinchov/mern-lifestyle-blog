const { User } = require('../models');
const jwt = require('../utils/jwt');

const { cookie } = require('../config/config');

module.exports = {
    get: {
        login: (req, res, next) => {
            console.log('Login page')
            return;
            // User.find()
            //     .then((users) => res.send(users))
            //     .catch(next)
        },
        register: (req, res, next) => {
            console.log('Register page')
            return;
        },
        logout: (req, res, next) => {
            const token = req.cookies[cookie];

            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(cookie)
                        .send('Logout successfully!');
                })
                .catch(next);
        },
        profile: (req, res, next) => {
            User.findById(req.query.id)
                .then((user) => res.send(user))
                .catch(err => {
                    res.status(500)
                        .send(err)
                })
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
                                res.status(401).send('Invalid password');
                                return;
                            }
                            const token = jwt.createToken({ id: user._id });

                            res.cookie(cookie, token, { maxAge: 3600000 })
                                .send(user)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
        },
        register: (req, res, next) => {
            const { username, password, repeatPassword } = req.body;

            // if (password !== repeatPassword) {
            //     res.status(400).send('Passwords do not match!');
            // }

            User.create({ username, password })
                .then(registeredUser => {
                    // const token = jwt.createToken({ id: registeredUser._id });

                    // res.cookie(cookie, token, { maxAge: 3600000 })
                    return res.send(registeredUser)

                }).catch((err) => {
                    // if (err.name === 'MongoError') {
                    //     return;
                    // }
                    console.log(err)
                })
        }
    }
}