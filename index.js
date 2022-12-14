const daysArr = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednsday",
   "Thursday",
   "Friday",
   "Saturday"
]
const month = [
   "January","fabuary","March","Aprail","May","June","july","August","September","Octumber","November","December"
]
a = "this";
let  day = document.getElementById("para-day").innerHTML = daysArr[new Date().getDay()]
let  date = document.getElementById("para-date").innerHTML = new Date().getDate() +"/" +month[new Date().getMonth()];
let  year= document.getElementById("para-year").innerHTML = new Date().getFullYear();




//  resptapi code starts here 




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1267d6f96msh8c32504fa04e816p135a02jsn9eaf323b1584',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
 const getWeather = (city)=>{  
   cityname.innerHTML=city
   para_city.innerHTML=city
   para_city_secound.innerHTML=city
   para_city_third.innerHTML=city
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
	.then(response => response.json())
	 .then(response=> { 
	// cloud_pct = response.cloud_pct
	temp.innerHTML = response.temp + " °C"
	humidity.innerHTML = response.humidity
	wind_speed.innerHTML = response.wind_speed +" km/hr"
    }
   )
	.catch(err => console.error(err));
}

   submit.addEventListener("click",(e)=>{
      e.preventDefault()
      getWeather(city.value)
   })
     getWeather("Bhopal")


const biaoratemp = document.getElementById("biaora");
const biaorahumidity = document.getElementById("biaora_humidity");
const biaorawind = document.getElementById("biaora_wind");

  const biaora = ()=>{  
  
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=biaora',options)
	.then(response => response.json())
	.then(response => {
biaoratemp.innerHTML = response.temp +" °C"
biaora_humidity.innerHTML = response.humidity 
biaora_wind.innerHTML = response.wind_speed + " km/hr"
   })
}
   biaora()


   const mumbai= ()=>{  
     
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai',options)
      .then(response => response.json())
      .then(response => {
   mumbai_temp.innerHTML = response.temp +" °C"
   mumbai_humidity.innerHTML = response.humidity
   mumbai_wind.innerHTML = response.wind_speed +" km/hr"
      })
   }
   mumbai()


   const Narsinghgarh= ()=>{  
     
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Narsinghgarh',options)
      .then(response => response.json())
      .then(response => {
   narsinghgarh_temp.innerHTML = response.temp +" °C"
   narsinghgarh_humidity.innerHTML = response.humidity
   narsinghgarh_wind.innerHTML = response.wind_speed +" km/hr"
      })
   }
   Narsinghgarh()

   link.addEventListener("click",()=>{
      getWeather("Delhi")
   }) 

bhopal.addEventListener("click",()=>{
   getWeather("Bhopal");
})


//  responsive design for website 
