const router = require("express").Router();
const Plant = require("../../models/Plant.model")


router.get("/plants", (req, res, next)=>{
    Plant
    .find()
    .then((dataFromDB) => {
        // console.log(dataFromDB);
        const data = {
            dataFromArr: dataFromDB
        }
        res.render("", dataFromDB)
        // res.send("Works")
    })
    .catch( (error) => {
        console.log("Error getting list of plants from DB", error);
        next(error);
    });
})

module.exports = router

