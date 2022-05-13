const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');
const quotesRoutes = require('./quotes-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/quotes', quotesRoutes);

module.exports = router;
