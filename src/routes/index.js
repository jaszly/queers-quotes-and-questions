const router = require('express').Router();
const about = require('./about');

router.get('/', (req, res) => {
  res.render('index');
});

router.use('/about', about);


module.exports = router;
