const router = require("express").Router();
const Plant = require("../../models/Plant.model")


//Details of a chosen plant

router.get('/search', (req, res, next)=>{
        res.render('plants/plants-search')
 
})


router.post('/search', (req, res, next) => {
    const {name} = req.body;
    Plant.findOne ({name})
        .then(() => {
            res.redirect('/plants/plants-details')
        })
        .catch(() => {
            res.render('plants/plants-search')
        })
})

// router.post('/search', (req, res, next)=>{
//     Plant
//     .findOne(req.query)
//     .then((datafromDB)=>{
//         console.log(req.query);
//         res.render('plants/plants-search', datafromDB)
//         // res.send(req.query)
//     })
//     .catch( (error) => {
//         console.log("Error adding from DB", error);
//         next(error);
//     });
// })

module.exports = router;
