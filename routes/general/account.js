const router = require("express").Router();
const Plant = require("../../models/Plant.model")
const User = require("../../models/User.model");

router.get('/account', (req, res) => {
    res.render('user/account', req.session.user ), 
    console.log(req.session.user);
})


module.exports = router;