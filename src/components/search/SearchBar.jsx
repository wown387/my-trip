import useAutocomplete from "@material-ui/lab/useAutocomplete";
import top100Films from "./SearchData";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useRef } from "react";
const useStyles = makeStyles((theme) => ({
  SearchIcon: {
    marginTop: 8,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginLeft: 30,
    width: "90%",
  },

  listbox: {
    fontSize: 20,
    width: "90%",
    marginTop: 15,
    padding: 10,
    zIndex: 1,
    position: "absolute",
    listStyle: "none",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    maxHeight: 400,
    borderRadius: "7px",
    border: "1px solid rgba(0,0,0,.25)",
    '& li[data-focus="true"]': {
      backgroundColor: "#4a8df6",
      color: "white",
      cursor: "pointer",
    },
    "& li:active": {
      backgroundColor: "#2977f5",
      color: "white",
    },
  },
}));

export default function UseAutocomplete(props) {
  const classes = useStyles();
  const textInput = useRef(null);
  const [key, setKey] = useState("");

  function keyPress(event) {
    if (event.keyCode === 13 && event.target.value) {
      event.preventDefault();
      props.search(event.target.value);
      setKey(event.target.value);
    } else if (event.keyCode === 13 && event.target.value) {
      event.preventDefault();
      // props.search(event.target.value);
      setKey(event.target.value);
      console.log(1515);
      console.log(getInputProps().ref.current.value);
      // props.search(event.target.value);
    }
    console.log(textInput.current);
  }
  const handleClick = (event) => {
    console.log(key);
    event.preventDefault();
    props.search(key);
  };
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: top100Films,
    getOptionLabel: (option) => {
      return option.title;
    },
  });
  const handleChange = (e) => {
    e.preventDefault();
    setKey(e.target.value);
  };
  return (
    <div>
      <form>
        {/* <div {...getRootProps()}> */}
        <div style={{ cursor: "pointer" }} onClick={handleClick}>
          <SearchIcon className={classes.SearchIcon} />
        </div>
        <input
          value={key}
          onChange={handleChange}
          className={classes.input}
          onKeyDown={keyPress}
          placeholder="search city name"
          // {...getInputProps()}
        />
        {/* </div> */}
        {/* {groupedOptions.length > 0 ? (
          <ul className={classes.listbox} {...getListboxProps()}>
            {groupedOptions
              .filter(
                (option) =>
                  key.toLowerCase() ===
                  option.title.slice(1, key.length + 1).toLowerCase()
              )
              .map((option, index) => (
                <div key={index}>
                  {" "}
                  <li
                    ref={textInput}
                    name={option.title}
                    className={index}
                    {...getOptionProps({ option, index })}
                  >
                    {" "}
                    {option.title} 11
                  </li>
                </div>
              ))}
          </ul>
        ) : null} */}
      </form>
    </div>
  );
}
