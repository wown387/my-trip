import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './nav-bar/nav-bar'
import Footer from "./Footer";
import Note from "./Note";
import MainArea from "./MainArea";
import Grid from '@material-ui/core/Grid';
import Album from './nav-bar/Album';
import SearchBar from './SearchBar'
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
  const [isSearch,setIsSearch]=useState(0)
  const [isSelect,setIselect]=useState(0)
  const [keyword,setKeyword]=useState("")
  const [imgsrc,setImagesrc]=useState("")
  const [descrip,setDescrip]=useState("")

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.


  function addNote(NewNote){
    
    setIselect(0)
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
    setIsSearch(1)
    setKeyword(keyword)

  }

  function selectImage(image){
    setIsSearch(0)
    setImagesrc(image)
    setIselect(true)
  }
  function iscorrect(album){
    if (album.length===0){
      setIsSearch(2)
    }
  }
  function handledescrip(descrip){
    console.log(descrip,111)
    setDescrip(descrip)
  }

  return (
    <div className="container">
     <ButtonAppBar search={search}  count={notes.length}/>
     { isSearch===1 && <Album iscorrect={iscorrect} selectImage={selectImage} descrip={handledescrip}keyword={keyword}/>}
     {isSearch===2 &&<h1>Can Not found image</h1>}
     {isSelect ? <div></div>: <SearchBar search={search}/> }
     {isSelect  ? <MainArea onAdd={addNote} descrip={descrip} image={imgsrc} keyword={keyword}/>:<div></div>}
      <Grid container className={classes.root} spacing={2}>
      {notes.map( (note,index)=>{
        return <Note className={classes.paper} onDelete={deleteNote} id={index} image={note.image} key={index} keyword={note.keyword} descrip={note.descrip} content={note.content} />

      })}
      </Grid>
      
      
      <Footer />
    
    </div>
  );
}

export default App;
