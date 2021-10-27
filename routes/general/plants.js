const router = require("express").Router();
const Plant = require("../../models/Plant.model")
const isLoggedIn = require('../../middleware/isLoggedIn')


router.get("/plants", (req, res, next)=>{
    Plant
    .find()
    .then((dataFromDB) => {
        const data = {
            dataFromArr: dataFromDB
        }
        res.render("plants/plants-list", data)
    })
    .catch( (error) => {
        console.log("Error getting list of plants from DB", error);
        next(error);
    });
})


router.get('/plants/plants-create', isLoggedIn ,(req, res, next) => {
    res.render('plants/plants-create')
})

router.post('/plants/plants-create', (req, res, next) => {
    const {name, description, sun, water, price, image} = req.body;
    
    const owner = req.session.user._id;

    Plant
    .create({name, description, sun, water, price, image, owner})
    .then(() => {
        res.redirect('/plants')
    })
    .catch( (error) => {
        console.log("Error getting list of plants from DB", error);
        next(error);
    });
})


module.exports = router