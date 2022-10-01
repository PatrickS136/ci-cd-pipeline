var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/test", (req, res, next) => {
  res.status(200).send("Halo dunia");
});

module.exports = router;
