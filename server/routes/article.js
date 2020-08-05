const router = require('express').Router();
const controllers = require('../controllers');
// const auth = require('../utils/auth');

router.get('/all', controllers.article.get.all);

// router.get('/create', controllers.article.get.create);
router.post('/create', controllers.article.post.create);

router.get('/details/:id', controllers.article.get.details);

router.get('/edit/:id', controllers.article.get.edit);
router.post('/edit/:id', controllers.article.post.edit);

router.get('/delete/:id', controllers.article.get.delete);

router.get('/like/:id', controllers.article.get.like);

module.exports = router;