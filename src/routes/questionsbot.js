const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('questionsbot');
});

module.exports = router;
