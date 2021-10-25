const router = require("express").Router();
const Plant = require("../../models/Plant.model")


router.get("/plants", (req, res, next)=>{
    Plant
    .find()
    .then((dataFromDB) => {
        console.log(actorFromDB);
        const data = {
            dataFromArr: dataFromDB
        }
        res.render("", dataFromDB)
    })
    .catch( (error) => {
        console.log("Error getting list of plants from DB", error);
        next(error);
    });
})