const express = require('express');
const router = express.Router();
const Card = require('../models/card');

router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const card = new Card({ title, description });
    await card.save();
    res.status(201).send(card);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error creating card' });
  }
});


router.get('/', async (req, res) => {
  try {
    const cards = await Card.find().exec();
    res.send(cards);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error retrieving cards' });
  }
});


router.get('/:title', async (req, res) => {
  try {
    const title = req.params.title;
    const card = await Card.findOne({ title }).exec();
    if (!card) {
      res.status(404).send({ message: `Card not found: ${title}` });
    } else {
      res.send(card);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error retrieving card' });
  }
});

module.exports = router;