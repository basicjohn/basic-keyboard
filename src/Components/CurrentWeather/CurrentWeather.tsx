import axios from 'axios';


const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
const city = 'London'; // Replace with your desired city

;

  const getWeather = async () => {
    const response = await axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      })
  }

const CurrentWeather = () => getWeather();

export default CurrentWeather;