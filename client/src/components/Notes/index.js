import React, { useState } from "react";
import API from "../../utils/API";
import {Redirect} from "react-router-dom"
import Cookies from 'js-cookie';
// import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";
import {
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import useAxios from "axios-hooks";
import axios from "axios";



// console.log(jwtDecode(accessString).id)
// const User = require("../../../../models/user")
const Notes = (props) => {
  const jwtDecode = require('jwt-decode');
  let accessString = localStorage.getItem('JWT')
  if(accessString == null){
    accessString = Cookies.get("JWT");
  
  }
  const [{ data: allnotes, loading }, getallnotes] = useAxios({
    url:"/api/notes",
    headers: { Authorization: `JWT ${accessString}` }
  });
  // const accessString = localStorage.getItem('JWT');
  // const [
  //   { data: putData, loading: putLoading, error: putError },
  //   addmynote
  // ] = useAxios({
  //   url: "/api/notes",
  //   method: "PUT",
  //   data: {
  //     name: myname,
  //     message: mymessage
  //   }
  // });
  const [mynote, setmynote] = useState();
  const [mytitle, setmytitle] = useState();
  const [mymessage, setmymessage] = useState();
  // const handleFormSubmit = event => {
  //   event.preventDefault();
  //   const accessString = localStorage.getItem('JWT');
  //   // addmynote()
  //   if(myname && mymessage){

  //     API.saveNote({
  //       name: myname,
  //       message: mymessage
  //     })
  //     .then(res => console.log(res))
  //     .then(getallnotes())
  //     // .then(setmymessage(""), setmyname(""))
  //     .catch(err => console.log(err));
  //   }
  // };
  const getUserFromToken = accessStringa => {
    if (accessStringa) {
      try {
        return JSON.parse(atob(accessStringa.split('.')[1]));
      } catch (error) {
        // ignore
      }
    }
  
    return null;
  };


  function handleFormSubmit(event) {
    event.preventDefault();
    const accessString = localStorage.getItem('JWT');
    console.log("notes 71 gettt id")
    console.log(jwtDecode(accessString).id)
    // console.log(props);
    console.log("notes 71 gettt id")
    if (mymessage) {
      axios.post("/api/notes", {
        title: mytitle,
        name: jwtDecode(accessString).username,
        message: mymessage
      },{headers: { Authorization: `JWT ${accessString}` }})
        .then(res => getallnotes())
        .catch(err => console.log(err));
    }
  };
  const handleInputChangename = event => {
    event.preventDefault();
    setmytitle(mytitle);
    // console.log(myname)
  };
  const handleInputChangemessage = event => {
    event.preventDefault();
    setmymessage(mymessage);
  };
   if (loading) {
    return <></>;
  }
  return (
    <div className="row">

    
    
    {/* <Grid container direction="column"> */}
    <div className="col">
    <h2>Submit Comment or Review</h2>
    <br />
      <Grid item>
        <form>
          <Input
            value={mytitle}
            onChange={(e)=> setmytitle(e.target.value)}
            // onChange={handleInputChangename}

            name="Title"
            placeholder="Title (required)"
          />
          <Input
            value={mymessage}
          onChange={(e)=> setmymessage(e.target.value)}
            name="message"
            placeholder="message (required)"
          />
          <FormBtn onClick={handleFormSubmit}>Submit Note</FormBtn>
        </form>
      </Grid>
      </div>
      <div className="col">
      <Grid container>
        <Typography variant="h5">Comments & Reviews</Typography>
        {!allnotes ? null : (

        <List dense item={"true"} container={"true"} component="nav" aria-label="notesDisplay">
          {allnotes.map(item => (
            <ListItem key={item._id}>
              <ListItemIcon>
                <NoteAddIcon />
              </ListItemIcon>
              <Grid container direction="column">
                <ListItemText primary={item.title} secondary={item.name} />
                <ListItemText primary={item.message} />
                <ListItemText secondary={item.date} />
                {/* <Grid>Message: {item.message}</Grid> */}
                {/* <Grid>Date: {item.date}</Grid> */}
                {/* </Grid> */}
              </Grid>
            </ListItem>
          ))}
        </List>
        )}
      </Grid>
      </div>
    {/* </Grid> */}
    </div>
  );
};

export default Notes;
