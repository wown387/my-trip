import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';

export default function SearchAppBar(props) {
  const [search,setSearch]=useState("")

  function handleChange(event){
      setSearch(event.target.value)

  }

  function keyPress(event){

      if(event.keyCode === 13){
          event.preventDefault()
          console.log(search)
          props.search(search)
          setSearch("")
     }
  }

  function submit(event){
    event.preventDefault()
    props.search(search)
    setSearch("")
  }

  return (
         
            <form>
            <input onKeyDown={keyPress}
              value={search}
              onChange={handleChange}
              placeholder="search city name"></input>
               <button  onClick={submit}><AddIcon/></button>
            </form>
         
        
  );
}
