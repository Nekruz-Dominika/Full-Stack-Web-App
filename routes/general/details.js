const router = require("express").Router();
const Plant = require("../../models/Plant.model")
const isAdmin = require("../../middleware/isAdmin.middleware")


//Details of a chosen plant

router.get('/plants/:plantid', (req, res, next)=>{
    Plant
    .findById(req.params.plantid)
    .then((datafromDB)=>{
        // console.log('----->', datafromDB);
        // res.render('', datafromDB)
        res.render('plants/plants-details', datafromDB)
    })
    .catch( (error) => {
        console.log("Error adding to DB", error);
        next(error);
    });
})


// Delete the plant
router.post('/plants/:plantid/delete', isAdmin, (req, res, next)=>{
    Plant
    .findByIdAndDelete(req.params.plantid)
    .then(()=>{
        res.redirect('/plants/')
    })
    .catch( (error) => {
        console.log("Error adding to DB", error);
        next(error);
    });
})

//Edit the plant

router.get('/plants/:plantid/edit', isAdmin, (req, res, next) => {
    Plant
        .findById(req.params.plantid)
        .then((plantFromDB) => {
            res.render('plants/plants-edit', plantFromDB)
        })
        .catch((error) => {
            console.log('Error loading edit form', error);
            next(error);
        })
    
})

router.post('/plants/:plantid/edit', (req, res, next) => {
    const {name, description, sun, water, price, image} = req.body;
    Plant.findByIdAndUpdate(req.params.plantid, {name, description, sun, water, price, image}, { new: true })
        .then((editedPlant) => {
            res.redirect('/plants/' + editedPlant._id + '/edit')
        })
        .catch((error) => {
            console.log('Error updating book details', error);
        })
})




module.exports = router;


