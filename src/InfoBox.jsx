import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {

    let INIT_URL = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=1024x1024&w=is&k=20&c=FzBhkGLI-zWZ36jW-uKKSeJJcFSNLFJ0b_kWmGlscuk="
    
    let HOT_URL = "https://images.unsplash.com/photo-1577985759186-0854dfd3f218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL = "https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.jpg?s=1024x1024&w=is&k=20&c=VOLOOAadZd4rMQuzxFsFv3My3Whb4b0Po4AizbyvwMU=";
    let RAIN_URL = "https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=1024x1024&w=is&k=20&c=-TpnM2BbRyugF0MiWYPnEXGFWOj-a2KqQ-z-we02R1w="

  

    return (
        <div className="infoBox">

            <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 200}}
                    image={info.humidity>80 ? RAIN_URL: info.temp < 15 ? COLD_URL : HOT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city.toUpperCase()} {info.humidity>80 ? <ThunderstormIcon />: info.temp < 15 ? <AcUnitIcon/> : <WbSunnyIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       <p>Temperature = {info.temp}&deg;C</p>
                       <p>Humidity = {info.humidity}</p>
                       <p>Min Temp = {info.tempMin}&deg;C</p>
                       <p>Max Temp = {info.tempMax}&deg;C</p>
                       <p>Feels Like = {info.feelsLike}</p>
                       <p>
                        The Weather can be describe as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                       </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}