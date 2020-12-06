import AddIcon from '@material-ui/icons/Add';
import React, { useState } from "react";

function CreateArea(props) {

  const [note,setNote]=useState({
    title:"",
    content:""
  })

  function handleChane(event){
    const {name,value } =event.target

    setNote(prev=>{
      return {...prev,[name]:value}
    })
  }

  function submit(event){
    event.preventDefault()
    props.onAdd(note)
    setNote({  
      title:"",
      content:""})
  }


  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChane} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChane} placeholder="Take a note..." rows="3" />
        <button onClick={submit}><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
