import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {

    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = "60a77cbde8cc9c7da673c6083bc150b2";

    let getInfo = async() => {

        try{
                let responce =  await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
                let jsonRes = await responce.json();

            let result = {
                    city : city,
                    feelsLike : jsonRes.main.feels_like,
                    temp : jsonRes.main.temp,
                    tempMax : jsonRes.main.temp_max,
                    tempMin : jsonRes.main.temp_min,
                    humidity: jsonRes.main.humidity,
                    weather : jsonRes.weather[0].description
            }
            return result;
        }
        catch(err) {
            throw err;
        }
    }
       


    let handleChange = (evt) => {
        setCity(evt.target.value)
    }

    let handleSubmit = async(evt) => {
        setError(false)
        try{
            evt.preventDefault() ;
            setCity('');
           
            let newInfo = await getInfo();
            updateInfo(newInfo)
        }
        catch(err) {
            setError(true);
        }
       
    }
    return (
            <div className='searchBox'>
               

                <form onSubmit={handleSubmit} action="">

                    <TextField onChange={handleChange} id="city" label="City Name" variant="outlined" required  value = {city}/>
                    <br /><br />

                    <Button variant="contained" type= "submit">Search</Button>
                    {error && <p style={{color: "red"}}>No such place exists.</p>}
                </form>
            </div>    
    )
}