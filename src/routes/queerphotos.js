const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('queerphotos');
})

module.exports = router;
