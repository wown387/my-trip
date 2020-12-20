import React ,{ useState,useEffect }from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "",
    padding: theme.spacing(8, 0, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album(props) {

  const [data, setData] = useState([]);


  useEffect(() => {
    
    if (props.keyword){
      axios
      .get("https://api.unsplash.com/search/photos/?client_id=NW58iNvc0yt-Lfryja1Eq68g65NtSlxKZ-3KzaNcoFw&query="+props.keyword+"&page=1&per_page=10")
      .then(response =>{
        props.iscorrect(response.data.results)
        setData(response.data.results)
      } 
      );
      
    }
  }, [props.keyword,props]);

  const classes = useStyles();

  function selectImage(event){
    props.selectImage(event.target.title)
    props.descrip(event.target.id)

  }
  return (
    <React.Fragment>
      <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          {data.map((data,index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card} name={data.alt_description} >
                <CardActionArea onClick={selectImage} >
                  <CardMedia
                    className={classes.cardMedia}
                    image={data.urls.small}
                    title={data.urls.small}
                    id={data.alt_description}
                  />
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      {data.alt_description}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          
          </Grid>
        </Container>
    </React.Fragment>
  );
}