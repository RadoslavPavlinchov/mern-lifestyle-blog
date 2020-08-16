const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');

router.get('/all', controllers.article.get.all);

router.post('/create', auth(), controllers.article.post.create);

router.get('/details/:id', controllers.article.get.details);

router.get('/edit/:id', controllers.article.get.edit);
router.put('/edit/:id', controllers.article.post.edit)

router.get('/delete/:id', controllers.article.get.delete);

router.put('/like/:id', auth(), controllers.article.get.like);
router.put('/unlike/:id', auth(), controllers.article.get.unlike);

router.put('/comment/:id', auth(), controllers.article.get.comment);
router.put('/uncomment/:id', auth(), controllers.article.get.uncomment);


module.exports = router;