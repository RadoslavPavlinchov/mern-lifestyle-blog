const { User } = require('../models');
const jwt = require('../utils/jwt');

const { cookie } = require('../config/config');

module.exports = {
    get: {
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
                            res.header('Authorization', token)
                                .send(user);
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
        },
        register: (req, res, next) => {
            const { username, password, rePassword } = req.body;

            if (password !== rePassword) {
                res.status(400).send('Passwords do not match!');
            }

            User.create({ username, password })
                .then(registeredUser => {
                    const token = jwt.createToken({ id: registeredUser._id });
                    res.header('Authorization', token)
                        .send(registeredUser);

                }).catch((err) => {
                    console.log(err)
                })
        },
        verifyLogin: (req, res, next) => {

            const token = req.headers.authorization || '';

            jwt.verifyToken(token)
                .then((data) => {
                    User.findById(data.id).then(user => {
                            res.send({
                                status: true,
                                user
                            })
                        });
                }).catch(err => {
                    if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                        res.status(401).send('UNAUTHORIZED!');
                        return;
                    }
                    res.send({
                        status: false
                    })
                });
        }
    }
}