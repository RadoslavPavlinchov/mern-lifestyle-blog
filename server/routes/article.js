const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');

router.get('/create', auth(), controllers.article.get.create);
router.post('/create', auth(), controllers.article.post.create);

router.get('/details/:id', auth(), controllers.article.get.details);

router.get('/edit/:id', auth(), controllers.article.get.edit);
router.post('/edit/:id', auth(), controllers.article.post.edit);

router.get('/delete/:id', auth(), controllers.article.get.delete);

router.get('/like/:id', auth(), controllers.article.get.like);

module.exports = router;