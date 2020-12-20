import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './nav-bar/nav-bar'
import Footer from "./Footer";
import Note from "./Note";
import MainArea from "./MainArea";
import Grid from '@material-ui/core/Grid';
import Album from './search/Album';
import SearchBar from './search/SearchBar'
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
  // 노트 생성
  function addNote(NewNote){
    
    setIselect(0)
    setNotes(prev=>{
      return [...prev,NewNote]
    })
  }
  // 노트 삭제
  function deleteNote(id){

    setNotes(prev=>{
      return notes.filter((note,index)=>{
        return index!==id
      })
    })
  }
  // MainArea에서 검색값 받아서 저장

  function search(keyword){
    setIsSearch(1)
    setKeyword(keyword)

  }
   // Album 에서 이미지 소스값 받아서 저장 

  function selectImage(image){
    setIsSearch(0)
    setImagesrc(image)
    setIselect(true)
  }
  // 이미지 데이터 못받을 시
  function iscorrect(album){
    if (album.length===0){
      setIsSearch(2)
    }
  }
  // 이미지 설명 값 저장
  function handledescrip(descrip){
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
