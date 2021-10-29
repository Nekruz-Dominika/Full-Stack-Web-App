const router = require("express").Router();
const Plant = require("../../models/Plant.model")
const User = require("../../models/User.model");
const isLoggedIn = require("../../middleware/isLoggedIn")

router.get('/account', isLoggedIn, (req, res) => {
    User
    .findById(req.session.user._id)
    .populate('plantsList')
    .then((userFromDB)=>{
        if (!userFromDB.plantsList[0]) {
            return res.render('user/account', {message: 'Please add some plants to your favorites list, they will appear here.'} );
        }
        else {
            res.render('user/account', userFromDB );
        }
        
        console.log(userFromDB.plantsList)
    })

})


module.exports = router;