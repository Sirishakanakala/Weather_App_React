import React ,{useState} from 'react'
import SearchForecast from '../search/SearchForecast'
import Weather from '../current-weather/Weather';
import DailyForecast from '../DailyForecast/DailyForecast';
import { WEATHER_API_URL , WEATHER_API_KEY } from '../../api';

export default function Forecast() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange =(searchData) =>{
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  }
  return (
    <>
      <div>
      <div className="container mt-4" style={{height:'auto' , width: 'auto', backgroundcolor: "rgba(0, 0, 0, 0.5)" , border:" none" , }}> 
        <div className="p-4 mb-4" style={{ backgroundColor:'rgba(107, 75, 182, 0.4)' , color:'white' }}>
          <h2>Daily Weather Forecast</h2> 
           <SearchForecast onSearchChange={handleOnSearchChange}/>
           {currentWeather && <Weather data={currentWeather} /> }
           {forecast && <DailyForecast data={forecast}/>}
          </div>
        </div>
      </div>
    </>
  )
}
