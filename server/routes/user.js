const router = require('express').Router();
const controllers = require('../controllers');

router.get('/all', controllers.user.get.all);

router.get('/profile', controllers.user.get.profile);

router.get('/logout', controllers.user.get.logout);

router.get('/verify', controllers.user.post.verifyLogin);

router.post('/login', controllers.user.post.login);
router.post('/register', controllers.user.post.register);

module.exports = router;