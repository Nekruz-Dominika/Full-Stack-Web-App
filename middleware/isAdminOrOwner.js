const Plant = require("../models/Plant.model")

function isAdminOrOwner (req, res, next) {

    Plant.findById(req.params.plantid)
        .then( plantFromDB => {

            console.log(plantFromDB.owner.toString());

            const owner = plantFromDB.owner.toString()
            if (req.session.user.role === 'admin' || req.session.user._id === owner) {
                next()
            } else {
                res.send('Please log in.')
                // console.log(req.session.user._id);
                // console.log(owner)
    }

        })
        .catch(() => {
            res.render('auth/login', { errorMessage: "In order to delete or edit plants, you must be logged in as an admin or the creator of the plant." })
        })



}

module.exports = isAdminOrOwner; 