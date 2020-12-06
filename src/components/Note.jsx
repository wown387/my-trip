import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(({
  root: {
     maxWidth: 345,
     margin: "10% auto"
  },
  media: {        
    height: 140,
  
  },
  })); 


function Note(props) {

  const classes = useStyles();

  function deleteId(event){
    props.onDelete(props.id)
  }

  return (
    
    <Card  className={classes.root}>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content}
          </Typography>
        </CardContent>



      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button onClick={deleteId} size="small" color="primary">
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
