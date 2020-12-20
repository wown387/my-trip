import React ,{ useState,useEffect }from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles(({
  root: {
     width: 300,
     margin: "10% auto", 
     fontfamily: 'sans-serif'

  },
  media: {        
    height: 0,
    paddingTop: '56.25%', // 16:9;
  },
  
  Share:{        
    color:'#33404F'
  
  },
  Delete:{        
    color:'#33404F'
  
  },


  })); 


function Note(props) {

  const [data, setData] = useState([]);
  useEffect(() => {
    
    if (props.keyword){
      axios
      .get("https://api.openweathermap.org/data/2.5/weather?q="+props.keyword+"&appid=b61ed55fcf58bf6647be8ab97338369c&units=metric")
      .then(response =>{
        setData([response.data.main.temp,
          response.data.weather[0].description,
          "http://openweathermap.org/img/wn/"+response.data.weather[0].icon+"@2x.png",
          response.data.sys.country]
          )
      } 
      );
    }
    
  }, [props.keyword]);

  

  const classes = useStyles();

  function deleteId(event){
    props.onDelete(props.id)
  
    
  }
  return (
    
    <Card  className={classes.root}>

      <CardActionArea>
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
     
        <CardContent>
          <Typography fontFamily= "sans-serif" gutterBottom variant="h5" component="h2">
            <div><h3>{props.keyword}</h3></div>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.content}
          </Typography>
        </CardContent>

      </CardActionArea>
      <CardActions>

        <Button className={classes.Share} size="small" color="primary" startIcon={data.length ?<Avatar src={data[2]}/>:""}>
        { data.length ? <div> {data[1]}<br></br> {data[0]}℃ {data[3]} </div>:<div></div> }
        </Button>
        <Button className={classes.Delete} onClick={deleteId} size="small" color="primary">
         <DeleteIcon/>
        </Button>
        
      </CardActions>

    </Card>

    /* 
      <h1></h1>
      <p></p>
      <button onClick={deleteId}></button>
     */
  );
}

export default Note;
