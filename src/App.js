
import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather'


function App() {


  const [ weather, setWeather]=useState(null);
  const [isLoading, setIsLoading]=useState(true);


  useEffect( ()=>{

    const handleError= () => {

      console.log("No permitio acceder a la ubicacion")
    }
  
    const success=(position)=>{
  
      const lat=position.coords.latitude;
      const lon=position.coords.longitude;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dcc016d40dca7445ea0b2182d97459c0`)
            .then(res=>{

              setWeather(res.data);
              setIsLoading(false);
            }
              
          )
    }

    setTimeout(()=>{

      navigator.geolocation.getCurrentPosition(success,handleError);

    },600)
    

  },[]);


 console.log(weather);

// x valor del icono del clima
 let x=weather?.weather[0].icon;
 console.log("icon:",x);

 // llamo funcion que me devuelve ruta de la imagen de fondo e ingreso por parametro x(icono)
  var pic=switchWeather(x);

 //var bg=require('./pictures/scatteredCloudsN.jpg')


  return (

      isLoading?
      (
        
        <div className='loading'>

            <div className="cssload-clock"></div>

        </div>
        
      
      ):(

          <div className="App" style ={{ backgroundImage: "url("+pic+")" }}>
            

            <Weather icon={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} location={weather?.name + ","+ weather?.sys.country} description={weather?.weather[0].description} clouds={weather?.clouds.all} wind={weather?.wind.speed} temperature={weather?.main.temp} pressure={weather?.main.pressure}/>

          
          </div>
      )
  );
}



function switchWeather(x){


  var bg=null;

  switch (x) {

    case '01d':
      //clear sky day
      bg=require('./pictures/sol.jpg') 
      return bg;
      

    case '01n':
      //clear sky night
      bg=require('./pictures/clearNight.jpeg')
      return bg;
       

    case '02d':
      //Few clouds Day
      bg=require('./pictures/fewCloudsD.jpeg') 
      return bg;

    case '02n':
      //Few clouds night
      bg=require('./pictures/fewCloudsN.jpg') 
      return bg;  
      

    case '03d':
      //Scattered clouds day
      bg=require('./pictures/scatteredClouds.jpg')
      return bg;
    

    case '03n':
      //scattered clouds night
      bg=require('./pictures/scatteredCloudsN.jpg')
      return bg;
      

    case '04d':
      //broken clouds day
      bg=require('./pictures/brokenClouds.jpg')
      return bg;
        
    
    case '04n':
      //broken clouds night
      bg=require('./pictures/brokenClouds.jpg')
      return bg;
          

    case '09d':
      //Shower rain day
      bg=require('./pictures/showerRainDay.jpg')
      return bg;
            

    case '09n':
      //Shower Rain Night   
      bg=require('./pictures/rainNight.jpg')
      return bg;
                       

    case '10d':
      //Raining day
      bg=require('./pictures/rainDay.jpg')
      return bg;
     

    case '10n':
      //Raining night
      bg=require('./pictures/rainNight.jpg')
      return bg;
       

    case '11d':
      //thunderstorm day
      bg=require('./pictures/thunderDay.jpg')
      return bg;
       

    case '11n':
      //thunderstorm night
      bg=require('./pictures/thunderNight.jpeg')
      return bg;
    

    case '13d':
      //Snow day
      bg=require('./pictures/snowDay.jpg')
      return bg;
     
      
    case '13n':
      //snow night
      bg=require('./pictures/snowNight.jpg')
      return bg;
        

    case '50d':
      //mist day
      bg=require('./pictures/mistD.jpg')
      return bg;
       

    case '50n':
      //mist night
      bg=require('./pictures/mistN.JPG')
      return bg;
         

    default:
      console.log(`Sorry, i cant read the weather`);
  }
}

export default App;
