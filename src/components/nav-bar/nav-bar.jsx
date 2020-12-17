import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Search from './search'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  bar: {
    background : "#6AE5AB"
    
  },
  menuButton: {
    marginRight: theme.spacing(3),
    background : "#F5BA31"
    
  },
  title: {
    flexGrow: 1,
  },
  badge:{
  margin: theme.spacing(1),
  }

}));



export default function ButtonAppBar(props) {
  const classes = useStyles();

  function search(id){
    props.search(id)
  }

  return (
    <div className={classes.root}>
      <AppBar  position="static" className={classes.bar} >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Trip
          </Typography>
          <Search search={search}/>
          <Badge badgeContent={props.count} color="secondary" className={classes.badge} >
            <EventNoteIcon />
          </Badge>

        </Toolbar>
      </AppBar>
    </div>
  );
}
