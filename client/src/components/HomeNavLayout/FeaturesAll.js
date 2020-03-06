import React, { useState } from "react";
// import SeriesAll from "../components/SeriesAll";
// import Allblogs from "../components/blog/Allblogs"
import Notes from "../Notes"
import VolumeDB from "../VolumesDB"
// import Cookies from 'js-cookie';
import YelpAPI from "../YelpAPI"
import Yelpevents from "../YelpAPI/Yelpevents"
// import SeriesScraper from "../components/Comicvineapi/seriesscraper"
import YoutubeAPI from "../Youtubeapi"
import CharactersBoard from "../CharactersBoard";
import Allblogs from "../blog/Allblogs"
import Games from "../../pages/Gamespage"
import Userprofile from "../../pages/Userprofile"
import Marketplace from "../Nmarketplace/Products"
import Mycart from "../Nmarketplace/Mycart"
import productsbought from "../Nmarketplace/productsbought"

import {
    TextField,
    Button,
    form,
    Grid,
    Avatar,
    Typography
  } from "@material-ui/core";
const FeaturedAll = props => {



    const [selectedDashboard, setSelectedDashboard] = useState(props.tab)

    return (
        <>
        <div className="text-center">
        <div><h2>Find More by clicking below</h2></div>
        <Button onClick={(e)=> setSelectedDashboard("Yelpcomicshops")}>Local Comic Book Shops</Button>
        {/* <Button onClick={(e)=> setSelectedDashboard("YelpEvents")}>Local Events</Button> */}
        <Button onClick={(e)=> setSelectedDashboard("VolumesByDB")}>Search Volumes</Button>
        <Button onClick={(e)=> setSelectedDashboard("Youtube")}>Youtube</Button>
        <Button onClick={(e)=> setSelectedDashboard("blogs")}>Blogs</Button>
        <Button onClick={(e)=> setSelectedDashboard("VolumeByCharacter")}>Find Series By Character</Button>
        <Button onClick={(e)=> setSelectedDashboard("games")}>Games</Button>
        <Button onClick={(e)=> setSelectedDashboard("profile")}>Profile</Button>
        <Button onClick={(e)=> setSelectedDashboard("marketplace")}>Marketplace</Button>
        <Button onClick={(e)=> setSelectedDashboard("cart")}>My Cart</Button>

</div>
{/* news */}


   {/* <YoutubeAPI /> */}

{/* <VolumeDB /> */}
 {/* <YelpAPI /> */}
{/* <Allblogs />  */}
{/* <SeriesAll /> */}
{/* <CharactersBoard props={props}/> */}
{selectedDashboard === 'Yelpcomicshops' && <YelpAPI props={props}>{props}</YelpAPI>}
{selectedDashboard === 'YelpEvents' && <Yelpevents props={props}>{props}</Yelpevents>}
{selectedDashboard === 'VolumesByDB' && <VolumeDB props={props}>{props}</VolumeDB>}
{selectedDashboard === 'Youtube' && <YoutubeAPI props={props} search={"superhero news"}>{props}</YoutubeAPI>}
{selectedDashboard === 'VolumeByCharacter' && <CharactersBoard props={props}>{props}</CharactersBoard>}
{selectedDashboard === 'blogs' && <Allblogs props={props}>{props}</Allblogs>}
{selectedDashboard === 'games' && <Games props={props}>{props}</Games>}
{selectedDashboard === 'profile' && <Userprofile props={props}>{props}</Userprofile>}
{selectedDashboard === 'marketplace' && <Marketplace props={props}>{props}</Marketplace>}
{selectedDashboard === 'cart' && <Mycart props={props}>{props}</Mycart>}

<br />
        {/* <Notes /> */}
        
    </>
  );
}
export default FeaturedAll;