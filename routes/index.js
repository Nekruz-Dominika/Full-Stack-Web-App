const router = require("express").Router();
// <<<<<<< HEAD
const request = require("request")
// =======
const express = require("express");
// >>>>>>> 0a6e1e56e1c392283c32147b6321c4e31956ad72


/* GET home page */
router.get("/", (req, res, next) => {
  console.log(req.app.locals);
  res.render("index");
});

router.get('/weather', (req, res, next)=>{
   
  let address = req.query.address
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${process.env.API_KEY}`
 
  request(url, (error, response, body) => {
      let data = JSON.parse(body)
      // console.log(data);
      if (!address){
          res.render('index', {message: 'Please provide the name of the city'});
          return;
      } else{
        
          let dataFromAPI = {
              temperature: data.main?.temp, 
              description: data.weather?.[0]?.description,
              icon: data.weather?.[0]?.icon,
              cityName: data.name,
          }
      
          res.render('index', dataFromAPI)
      }
  })

})

module.exports = router;

