import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './nav-bar/nav-bar'
import Footer from "./Footer";
import Note from "./Note";
import MainArea from "./MainArea";
import Grid from '@material-ui/core/Grid';
import Album from './nav-bar/Album'
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
  const [CorrectKeyword,setIscorrectkeyword]=useState(true)
  const [keyword,setKeyword]=useState("")
  const [imgsrc,setImagesrc]=useState("")

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

  function search(keyword){
    setIsSearch(true)
    setKeyword(keyword)

  }

  function selectImage(image){
    setIsSearch(false)
    setImagesrc(image)
    setIscorrectkeyword(true)
  }
  function iscorrect(album){
    if (album.length===0){
      setIscorrectkeyword(false)
    }
  }

  return (
    <div className="container">
     <ButtonAppBar search={search}  count={notes.length}/>
     { isSearch && <Album iscorrect={iscorrect} selectImage={selectImage} keyword={keyword}/>}
     {CorrectKeyword ?  <div></div>: <h1>Not found image</h1>}
    
      <MainArea onAdd={addNote} image={imgsrc} keyword={keyword}/>
      <Grid container className={classes.root} spacing={2}>
      {notes.map( (note,index)=>{
        return <Note className={classes.paper} onDelete={deleteNote} id={index} image={note.image} key={index} keyword={note.keyword} content={note.content} />

      })}
      </Grid>
      
      
      <Footer />
    
    </div>
  );
}

export default App;
