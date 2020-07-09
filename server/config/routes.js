const { article, auth } = require('../routes/api');

module.exports = (app) => {
    app.use('/routes/api/auth', auth);
    app.use('/routes/api/article', article);

    app.use('*', (req, res, next) => {
        res.status(404).send('<h2>There is no such page friend!</h2>');
    })
}