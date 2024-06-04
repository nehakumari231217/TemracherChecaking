import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox ({ info }) {
    let INIT_URL = "https://images.unsplash.com/photo-1675695759698-5aa675b7f972?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    
    const HOT_URL = "https://images.unsplash.com/photo-1675695759698-5aa675b7f972?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1692905292854-44bca3a3de72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRCUyMElNQUdFfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHJBSU4lMjBJTUFHRXxlbnwwfHwwfHx8MA%3D%3D";

    return (
    <div className="InfoBox">
      <div className='cardContanier'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature :- {info.temp}&deg;C</p>
         <p>Humidity :- {info.humidity}&deg;C</p>
         <p>Min Tem :- {info.tempMin}&deg;C</p>
         <p>Max Tem :- {info.tempMax}&deg;C</p>
         <p>The Weather Can Be Described as <i>{info.weather}</i> And Feels Like {info.temp}&deg;C</p>
         
        </Typography>
      </CardContent>
      
    </Card>
    </div>
      </div>
      );
}