const router = require("express").Router();
const Plant = require("../../models/Plant.model")
const User = require("../../models/User.model");
const isAdmin = require("../../middleware/isAdmin.middleware")
const isAdminOrOwner = require("../../middleware/isAdminOrOwner")
const isLoggedIn = require("../../middleware/isLoggedIn")
const fileUploader = require('../../config/cloudinary.config');

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

// Add the plant to favorites list

router.post('/plants/:plantid', isLoggedIn, (req, res, next) => {
    User.findByIdAndUpdate(req.session.user._id, { $push: {plantsList: req.params.plantid}}, { 'new': true })
        .then(() => res.redirect('/account'))
})


// Delete the plant
router.post('/plants/:plantid/delete', isAdminOrOwner, (req, res, next)=>{
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

router.get('/plants/:plantid/edit', isAdminOrOwner, (req, res, next) => {
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

router.post('/plants/:plantid/edit', fileUploader.single('image'), (req, res, next) => {
    const {name, description, sun, water, price, existingImage} = req.body;
    
    let image;
    if (req.file) {
        image = req.file.path;
    } else {
        image = existingImage;
    }
    
    Plant.findByIdAndUpdate(req.params.plantid, {name, description, sun, water, price, image}, { new: true })
        .then((editedPlant) => {
            res.redirect('/plants/' + editedPlant._id + '/edit')
        })
        .catch((error) => {
            console.log('Error updating book details', error);
        })
})




module.exports = router;


