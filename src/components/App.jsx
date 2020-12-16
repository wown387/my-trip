import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './nav-bar/nav-bar'
import Footer from "./Footer";
import Note from "./Note";
import MainArea from "./MainArea";
import Grid from '@material-ui/core/Grid';
import Search from './nav-bar/FindSearch'
// import  PinnedSubheaderList from './nav-bar/FindSearch'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(1),
  },
}));

function App() {


  const classes = useStyles();
  const [notes,setNotes]=useState([])
  const [isSearch,setIsSearch]=useState(false)

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.


  function addNote(NewNote){
 
    setNotes(prev=>{
      return [...prev,NewNote]
    })
  }

  function deleteNote(id){

    setNotes(prev=>{
      return notes.filter((note,index)=>{
        return index!==id
      })
    })
  }

  function search(id){
    console.log(id)
    setIsSearch(true)

    

  }

  
  return (
    <div className="container">
     <ButtonAppBar search={search}  count={notes.length}/>
      <MainArea onAdd={addNote} />
      <Grid container className={classes.root} spacing={2}>
      {notes.map( (note,index)=>{
        return <Note className={classes.paper} onDelete={deleteNote} id={index}  key={index} title={note.title} content={note.content} />

      })}
      </Grid>
      {isSearch && <Search/>}
      
      <Footer />
    
    </div>
  );
}

export default App;
