const router = require("express").Router();
const request = require("request")


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/weather', (req, res, next)=>{
   
  let address = req.query.address
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${process.env.API_KEY}`
 
  request(url, (error, response, body) => {
      let data = JSON.parse(body)
      // console.log(data);
      if (!address){
          res.send('please provide your city')
      } else{
          let dataFromAPI = {
              temperature: data.main.temp, 
              description: data.weather[0].description,
              icon: data.weather[0].icon,
              cityName: data.name,
          }

          res.render('index', dataFromAPI)
      }
  })

})

module.exports = router;
