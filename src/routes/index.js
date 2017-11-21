const router = require('express').Router();
const about = require('./about');
const quotes = require('/quotes');

router.get('/', (req, res) => {
  res.render('index');
});

router.use('/about', about);
router.use('/quotes', quotes);

module.exports = router;
