const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Quotes, User, Comment, Like } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  console.log('======================');
  Quotes.findAll({
    attributes: [
      'id',
      'author',
      'text',
      [sequelize.literal('(SELECT COUNT(*) FROM like WHERE quotes.id = like.quotes_id)'), 'like_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'quotes_id', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbQuotesData => res.json(dbQuotesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Quotes.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      [sequelize.literal('(SELECT COUNT(*) FROM like WHERE quotes.id = like.quotes_id)'), 'like_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['user_id', 'comment_text', 'quotes_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbQuotesData => {
      if (!dbQuotesData) {
        res.status(404).json({ message: 'No quote found with this id' });
        return;
      }
      res.json(dbQuotesData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Quotes.create({
    user_id: req.session.user_id
  })
    .then(dbQuotesData => res.json(dbQuotesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/uplike', withAuth, (req, res) => {
  Quotes.uplike({ ...req.body, user_id: req.session.user_id }, { like, Comment, User })
    .then(updatedlikeData => res.json(updatedlikeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Quotes.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbQuotesData => {
      if (!dbQuotesData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbQuotesData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Quotes.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbQuotesData => {
      if (!dbQuotesData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbQuotesData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;