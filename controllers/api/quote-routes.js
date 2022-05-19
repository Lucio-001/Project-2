const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Quote, User, Comment, ThumbsUp } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  console.log("======================");
  Quote.findAll({
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
    .then((dbQuotesData) => res.json(dbQuotesData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Quote.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
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
        attributes: ["user_id", "comment_text", "quote_id"],
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
      if (!dbQuotesData) {
        res.status(404).json({ message: "No quote found with this id" });
        return;
      }
      res.json(dbQuotesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Quote.create({
    user_id: req.session.user_id,
  })
    .then((dbQuotesData) => res.json(dbQuotesData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/uplike", withAuth, (req, res) => {
  Quote.uplike(
    { ...req.body, user_id: req.session.user_id },
    { ThumbsUp, Comment, User }
  )
    .then((updatedlikeData) => res.json(updatedlikeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Quote.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbQuotesData) => {
      if (!dbQuotesData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbQuotesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Quote.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbQuotesData) => {
      if (!dbQuotesData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbQuotesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
