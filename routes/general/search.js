const router = require("express").Router();
const Plant = require("../../models/Plant.model")


//Details of a chosen plant

    
router.get('/search', (req, res, next)=>{
        res.render('plants/plants-search')
})

router.get('/search-result', (req, res, next)=>{
    
    // const {name} = req.query;

    Plant
    .findOne(req.query)
    .then((datafromDB)=>{
        if (!datafromDB) {
            return res.render('plants/plants-search', { errorMessage: "Sorry, we couldn't find the plant." })
        }
        res.render('plants/plants-search-result', datafromDB)
    })
    .catch( (error) => {
        console.log("Error adding from DB", error);
        next(error);
    });
})

module.exports = router;
