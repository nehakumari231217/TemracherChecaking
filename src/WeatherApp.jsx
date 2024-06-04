import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp () {
     const [weatherInfo, setweatherInfo] = useState({
        city: "Delhi",
        feelslike: 21.84,
        temp: 25.21,
        tempMin: 25.3,
        tempMax: 25.99,
        humidity: 47,
        weather: "haza",

    });

    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center"}}>
            <h1>Weather App By Indian neha</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}
