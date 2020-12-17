import AddIcon from '@material-ui/icons/Add';
import React, { useState } from "react";

function MainArea(props) {

  const [note,setNote]=useState({
    keyword:"",
    content:"",
    image:""
  })

  function handleChane(event){
    const {name,value } =event.target
    setNote(prev=>{
      return {...prev,keyword:props.keyword}
    })

    setNote(prev=>{
      return {...prev,[name]:value}
    })
    setNote(prev=>{
      return {...prev,image:props.image}
    })


  }

  function submit(event){
    
    if (note.image===""){
      alert('이미지 혹은 내용을 입력해주세요')
      event.preventDefault()

    }
    else{
      console.log(note)
      event.preventDefault()
      props.onAdd(note)
    
      setNote({  
        keyword:"",
        content:"",
        image:""})

    }
   
    
  }


  return (
    <div>
      <form>
        <h1>{props.keyword}</h1>
        <textarea name="content" value={note.content} onChange={handleChane} placeholder="Take a note..." rows="3" />
        <button onClick={submit}><AddIcon/></button>
      </form>
    </div>
  );
}

export default MainArea;
