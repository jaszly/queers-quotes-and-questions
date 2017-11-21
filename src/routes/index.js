const router = require('express').Router();
const about = require('./about');
const quotes = require('./quotes');
const questionsbot = require('./questionsbot');
const queerphotos = require('./queerphotos');

router.get('/', (req, res) => {
  res.render('index');
});

router.use('/about', about);
router.use('/quotes', quotes);
router.use('/questionsbot', questionsbot);
router.use('/queerphotos', queerphotos);

module.exports = router;
