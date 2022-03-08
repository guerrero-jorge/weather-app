import React from 'react';
import { useState} from 'react';


const Weather = ({icon,location,description,clouds,wind,temperature,pressure}) => {


    const [state,setState]=useState(false);

    let fahrenheit=Math.round((temperature*1.8)+32);
    console.log(temperature)
    console.log(fahrenheit);


    return (
        <div className='weather'>
            <h2>Weather App</h2>
            <h3>{location}</h3>
            <div className='information'>
                <img src={icon} alt="" />
                <ul>

                    <li id='description'><b>"{description}"</b></li> 
                    <li><i className="fas fa-cloud"></i> <b>Clouds: </b>{clouds} %</li>
                    <li><i className="fas fa-wind"></i> <b>Wind Speed: </b>{wind} m/s</li>
                    <li><i className="fas fa-thermometer-three-quarters"></i> <b>Pressure: </b>{pressure}mb</li>
                     
       
 
                </ul>
            </div>
            <h2>{state ? fahrenheit : temperature} {state ? "°F":"°C"}</h2>
            <button onClick={()=>setState(!state)}>Convertion {state? "°C" : "°F" } </button>

        </div>
    );
};

export default Weather;