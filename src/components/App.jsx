import React, { useState } from "react";
import ButtonAppBar from './nav-bar/nav-bar'
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes]=useState([])

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
  return (
    <div className="container">
 
     <ButtonAppBar count={notes.length}/>
      <CreateArea onAdd={addNote} />
      {notes.map( (note,index)=>{
        return <Note onDelete={deleteNote} id={index} key={index} title={note.title} content={note.content} />
      })}
    
      
    <Footer />
    </div>
  );
}

export default App;
