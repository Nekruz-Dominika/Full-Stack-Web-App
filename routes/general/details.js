const router = require("express").Router();
const Plant = require("../../models/Plant.model")

router.get('/plants/:plantid/', (req, res, next)=>{
    Plant
    .findById(req.params.plantid)
    .then((datafromDB)=>{
        console.log('----->', datafromDB);
        res.render('', datafromDB)
    })
    .catch( (error) => {
        console.log("Error adding to DB", error);
        next(error);
    });
})

router.get('/plants/:plantid/delete', (req, res, next)=>{
    Plant
    .findByIdAndDelete(req.params.plantid)
    .then(()=>{
        res.render('/')
    })
    .catch( (error) => {
        console.log("Error adding to DB", error);
        next(error);
    });
})





module.exports = router;


