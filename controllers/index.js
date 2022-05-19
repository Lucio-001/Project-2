const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const createquotesRoutes = require("./createquotes-routes.js");

router.use("/", homeRoutes);
router.use("/createquote", createquotesRoutes);
router.use("/api", apiRoutes);

module.exports = router;
