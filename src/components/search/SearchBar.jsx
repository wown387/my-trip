
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import top100Films from './SearchData'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  SearchIcon:{
    marginTop:8,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input:{
    marginLeft:30,
    width:"90%",
  },
  
  listbox: {
    fontSize:20,
    width:"90%",
    marginTop:15 ,
    padding: 10,
    zIndex: 1,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    maxHeight: 400,
    borderRadius: "7px",
    border: '1px solid rgba(0,0,0,.25)',
    '& li[data-focus="true"]': {
      backgroundColor: '#4a8df6',
      color: 'white',
      cursor: 'pointer',
    
    },
    '& li:active': {
      backgroundColor: '#2977f5',
      color: 'white',
     
    },
  },
}));

export default function UseAutocomplete(props) {
  const classes = useStyles();

  const [key,setKey]=useState("");
 
  function keyPress(event){

      if(event.keyCode === 13 && event.target.value ){
        console.log()
        event.preventDefault()
        props.search(event.target.value)
     }
     else{
       setKey(event.target.value)

     }
  }
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: top100Films,
    getOptionLabel: (option) => { 
       return option.title}
  });

  return (
  <div>
  <form>
      <div  {...getRootProps()}>
        <SearchIcon className={classes.SearchIcon} />
        <input className={classes.input}
               onKeyDown={keyPress}
               placeholder="search city name"
              
         {...getInputProps()} />

      </div>
      {groupedOptions.length > 0 ? (
        <ul   className={classes.listbox} {...getListboxProps()}>
          {groupedOptions.filter(option=>key.toLowerCase()=== option.title.slice(1,key.length+1).toLowerCase()).map((option, index) => ( <li  {...getOptionProps({ option, index })}> {option.title}  </li>))
          }
          
        </ul>
      ) : null}
       
       </form>
    </div>
 
  );
}