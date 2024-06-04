import './SearchBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, seterror] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "02edca3a9577834d1f162acaa5848c07";

    let getWetherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

            let jsResponce = await response.json();
            console.log(jsResponce);
            let result = {
                city: city,
                temp: jsResponce.main.temp,
                tempMin: jsResponce.main.temp_min,
                tempMax: jsResponce.main.temp_max,
                humidity: jsResponce.main.humidity,
                feelsLike: jsResponce.main.feels_like,
                weather: jsResponce.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }

    };



    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handlesubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            let newinfo = await getWetherInfo();
            updateInfo(newinfo);
            setCity("");
        } catch (err) {
            seterror(true);
        }

    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handlesubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city}
                    onChange={handleChange}
                />
                <br></br> <br></br>
                <Button variant="contained" type='submit' >
                    Search
                </Button>
                {error && <p style={{color: "red"}}> NO Such Place Exists In Server</p>}
            </form>
        </div>
    );
}