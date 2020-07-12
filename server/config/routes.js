const { article, user } = require('../routes');

module.exports = (app) => {
    app.use('/api/user', user);
    app.use('/api/article', article);

    app.use('*', (req, res, next) => {
        res.status(404).send('<h2>There is no such page friend!</h2>');
    })
}