// import React from "react";
import React, { useState } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Notes from "../Notes";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import useAxios from "axios-hooks";
import { makeStyles } from "@material-ui/styles";
import "./styles.css";
import {Redirect} from "react-router-dom"
import Cookies from 'js-cookie';
const useStyles = makeStyles(theme => ({
  container: { backgroundColor: "#F2F2F2" }
}));
const CharactersBoard = (props) => {
  let accessString = localStorage.getItem('JWT')
  const [{ data: characters, loading }, getbyname] = useAxios({
    // Authorization: "JWT"+ {accessString},
    url: "/api/characters",
    headers: { Authorization: `JWT ${accessString}` }
  }
  );

  // axios.get("/api/characters",
  // {headers: { Authorization: `JWT ${accessString}` }}).then(res => {
  //     this.setState({ books: res.data })
  // })
  // const accessString = localStorage.getItem('JWT');
  // const getaccessString = () => {
    if(accessString == null){
      accessString = Cookies.get("JWT");
    }
  // }
  // const getseriesbyname = name => {
  //   // console.log("Get series by name!");
  //   // console.log(name);
  //   API.getseriesbyname(name)
  //     .then(res => {
  //       this.setState({ series: res.data });
  //       // console.log("This is the res: ");
  //       // console.log(res);
  //     })
  //     .catch(err => console.log(err));
  // };
  const classes = useStyles;

  // shuffling 
  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  const [dccharactersArray, setdccharactersArray] =useState();
  const [marvelcharactersArray, setmarvelcharactersArray] =useState();

  // const filterdccharacters = setdccharactersArray(characters.filter(char => char.publisher === "DC"))
// end shuffle

// filter
//take characters and push into 2 arrays
// function dccharactersArray(dcArray){
//     dcArray.filter(function (item){
//         return item.publisher === "DC"
//     })
// }

// let dccharactersArray = characters.filter(function(item) {
//     return item.publisher === "DC"
// return item.publisher === "DC"

// const newTodos = todos.filter((_, index) => index !== todoIndex);
//     setTodos(newTodos);
// })

// deleteTodo={(todoIndex) => {
    //     const newTodos = todos.filter((_, index) => index !== todoIndex);
    
    //     setTodos(newTodos);
    //   }}
    
    // let marvelcharactersArray = characters.filter(function(item) {
        //     return item.publisher === "Marvel"
        // })
        
        // const newdcarraytry1 = characters.filter(item => item.publisher === "DC");
        // setdccharactersArray(newdcarraytry1)
        // setmarvelcharactersArray( characters.filter(item => item.publisher === "Marvel"));
        // function getdccharacters() {
// let dccharacters = characters.filter(dc => (
            
//             dc.publisher === "DC"
//             ))
          // } 

        

        if (loading && !characters) {
            return <></>;
        }
        // to shuffle all the tiles
        // const shuffledPosts = shuffleArray(characters);
  
  return (
    <div className={classes.container}>
      <br />
      <div className="row">
  <div className="dccharacters col-xl-6">
  {/* <div><h3 className="text-center">Marvel Comics</h3></div> */}

      <GridList cols={4}>
      {/* {const dccharacters = characters.filter(item => item.publisher === "DC") */}
        {/* {dccharactersArray.map(item => ( */}
            {/* {shuffleArray(characters).map(item => ( */}
                {/* {dccharactersArray.map(item => ( */}
              {/* {shuffleArray(characters).slice(12).map(item => ( */}
                {characters.slice(12).map(item => (


          <GridListTile
            key={item.name}
            // onClick={() => getseriesbyname(item.name)}
          >
            <img src={item.img} alt={item.name} />
            {item.name}
            <GridListTileBar
              title={<Link to={"/series/" + item.name}>{item.name}</Link>}
            />
          </GridListTile>
        ))}
      </GridList>
  </div>
  {/* end of dccharacter div */}

  {/* marvel div */}
  <div className="marvelcharacters col-xl-6">

<GridList cols={4}>
    {characters.reverse().slice(12).map(item => (

    <GridListTile
      key={item.name}
      // onClick={() => getseriesbyname(item.name)}
    >
      <img src={item.img} alt={item.name} />
      {item.name}
      <GridListTileBar
        title={<Link to={"/series/" + item.name}>{item.name}</Link>}
      />
    </GridListTile>
  ))}
</GridList>
</div>

</div>
    </div>
  );
};

export default CharactersBoard;
