const router = require("express").Router();
const sequelize = require("../config/connection.js");
const { Quote, User, Comment, ThumbsUp } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  Quote.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "quote_id",
      "author",
      "text",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM thumbsUp WHERE quote.id = thumbsUp.quote_id)"
        ),
        "thumbsUp_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "quote_id", "user_id"],
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
      res.render("dashboard", { quotes, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Quote.findByPk(req.params.id, {
    attributes: [
      "id",
      "author",
      "text",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM thumbsUp WHERE quote.id = thumbsUp.quote_id)"
        ),
        "thumbsUp_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "quote_id", "user_id"],
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

        res.render("edit-quotes", {
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
