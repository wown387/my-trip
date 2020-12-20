import AddIcon from '@material-ui/icons/Add';
import React, { useState } from "react";

function MainArea(props) {

  const [note,setNote]=useState({
    keyword:"",
    content:"",
    image:"",
    descrip:""
  
  })

  function handleChane(event){
    const {name,value } =event.target
  
    setNote(prev=>{
      return {...prev,[name]:value,image:props.image,keyword:props.keyword,descrip:props.descrip}
    })

  }
  function submit(event){
    
    if (note.image===""){
      alert('노트에  내용을 입력해주세요')
      event.preventDefault()

    }
    else{
      console.log(note)
      event.preventDefault()
      props.onAdd(note)
    
      setNote({  
        keyword:"",
        content:"",
        image:"",
        descrip:""})
        
    }
   
    
  }
  return (
    <div className="MainArea">
      <form>
        <div className="sample">
        <img src={props.image} alt="note"></img> 
        <div><h1>{props.keyword}</h1><p>{props.descrip}</p></div> 
        </div>
         <textarea  name="content" value={note.content} onChange={handleChane} placeholder="take a note..." rows="3"/>
        <button onClick={submit}><AddIcon/></button>
      </form>
    </div>
  );
}

export default MainArea;
