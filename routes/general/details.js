const router = require("express").Router();
const Plant = require("../../models/Plant.model")

router.get('/plants/:plantid', (req, res, next)=>{
    Plant
    .findById(req.params.plantid)
    .then((datafromDB)=>{
        console.log('----->', datafromDB);
        // res.render('', datafromDB)
        res.render('plants/plants-details', datafromDB)
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

router.get("/movies/:plantid/edit", (req, res, next)=>{
    Plant
    .findById(req.params.plantid)
    .then((datafromDB)=>{
        // console.log(datafromDB);
        res.render('', datafromDB)
    })
    .catch( (error) => {
        console.log("Error adding to DB", error);
        next(error);
    });
})

router.post("/movies/:plantid/edit", (req, res, next)=>{
    
    const {title, genre, plot, cast } = req.body;
    
    Book
    .findByIdAndUpdate(req.params.plantid, title, genre, plot, cast, {new: true})
    .then((datafromDB)=>{
        // res.send('hello')
        res.redirect("/plants/" + datafromDB._id)
    })
    .catch( (error) => {
        console.log("Error getting details for a single book from DB", error);
        next(error);
    });   
})



module.exports = router;


