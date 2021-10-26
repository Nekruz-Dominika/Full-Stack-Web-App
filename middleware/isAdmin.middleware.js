function isAdmin (req, res, next){
    if(req.session.user.role === 'admin'){
        next()
    } else {
        res.send("you are not admin")
    }
}


module.exports = isAdmin; 