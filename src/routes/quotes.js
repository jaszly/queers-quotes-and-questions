const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('quotes');
});


module.exports = router;
