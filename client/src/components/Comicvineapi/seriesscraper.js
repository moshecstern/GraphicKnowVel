// import React, { useState, useEffect } from "react";
// import {
//   Grid,
//   Typography,
//   GridList,
//   GridListTile,
//   GridListTileBar,
//   Link
// } from "@material-ui/core";
// import API from "../../utils/API";
// import { makeStyles } from "@material-ui/styles";
// // import { makeStyles } from "@material-ui/core/styles";

// const cheerio = require("cheerio");
// const proxyURL = "https://cors-anywhere.herokuapp.com/";

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "#D92B6B"
//   },
//   title: { backgroundColor: "green" },
//   group: {
//     backgroundColor: "#F2A74B"
//     // padding: spacing(2)
//   }
// });
// const SeriesScraper = () => {
//     const [mysearch, setmysearch] = useState("A");
//     const url = "https://dc.fandom.com/wiki/Category:Collected_Editions?from=A";
//   const classes = useStyles;
//   const [comicUrls, setComicUrls] = useState([]);
//   useEffect(
//     () =>
//       API.getNews(proxyURL, url)
//         .then(function(res) {
//           let data = "div > article";
//           const $ = cheerio.load(data);
//           let img = $("article > a > div > div", res);
//           for (let i = 1; i < 9; i++) {
//             const item = {
//               // key: $("article", res)[i].attribs.data,
//               link: $("article > a", res)[i].attribs.href,
//               title: $("article > div > h3 > a", res)[i].attribs.title,
//               image: $(img[i])
//                 .children()
//                 .children()
//                 .first("source")
//                 .data("srcSet")
//             };
//             setComicUrls(comicUrls => [...comicUrls, item]);
//             console.log(comicUrls)
//           }
//         })
//         .catch(err => console.log(err)),
//     []
//   );
//   return (
//     <Grid container justify="space-around" alignItems="baseline">
//       <Grid item>
//         <Typography variant="h4" className={classes.root}>
//           Search Collected Editions
//           {console.log(comicUrls)}
//         </Typography>
//       </Grid>
//       <Grid item>
//         {!comicUrls ? null : (
//           <GridList item cols={4} className={classes.group}>
//             {comicUrls.map(item => (
//               <GridListTile key={item.title}>
//                 <img srcset={item.image} alt={item.title} />
//                 <GridListTileBar
//                   title={
//                     <Link
//                       href={`https://www.cbr.com${item.link}`}
    
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {item.title}
//                     </Link>
//                   }
//                 />
//               </GridListTile>
//             ))}
//           </GridList>
//         )}
//       </Grid>
//     </Grid>
//   );
// };

// export default SeriesScraper;