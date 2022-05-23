const router = require("express").Router();
const sequelize = require("../config/connection.js");
const { Quotes, User, Comment, Like } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  Quotes.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "quotes_id",
      "author",
      "text",
      "quotes_url",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM `like` WHERE quotes.id = like.quotes_id)"
        ),
        "like_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "quotes_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbQuotesData) => {
      const quotes = dbQuotesData.map((quotes) => quotes.get({ plain: true }));
      console.log(quotes);
      res.render("createquote", { quotes, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Quotes.findByPk(req.params.id, {
    attributes: [
      "id",
      "author",
      "text",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM `like` WHERE quotes.id = like.quotes_id)"
        ),
        "like_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "quotes_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbQuotesData) => {
      if (dbQuotesData) {
        const quotes = dbQuotesData.get({ plain: true });

        res.render("edit-quote", {
          quotes,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
