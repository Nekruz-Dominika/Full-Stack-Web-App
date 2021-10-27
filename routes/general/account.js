const router = require("express").Router();
const Plant = require("../../models/Plant.model")
const User = require("../../models/User.model");
const isLoggedIn = require("../../middleware/isLoggedIn")

router.get('/account', isLoggedIn, (req, res) => {
    User
    .findById(req.session.user._id)
    .populate('plantsList')
    .then((userFromDB)=>{
        res.render('user/account', userFromDB );
        console.log(userFromDB.plantsList)
    })

})


module.exports = router;