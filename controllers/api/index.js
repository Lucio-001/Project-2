const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const commentRoutes = require("./comment-routes");
const quoteRoutes = require("./quote-routes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/quotes", quoteRoutes);

module.exports = router;
