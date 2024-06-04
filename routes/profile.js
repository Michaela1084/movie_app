var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/', function(req, res, next) {
  res.render('profile', { user_id: 'Michael' });
});

module.exports = router;
