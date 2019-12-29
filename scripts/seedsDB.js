const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/comicbookdb"
  );
// https://www.amazon.com/gp/product/B07JJJGYQ4/?ie=UTF8&%2AVersion%2A=1&%2Aentries%2A=0
//amazon banner link https://affiliate-program.amazon.com/home/ads/adcode/search?ac-ms-src=quicklinks&search_term=BATMAN+KINDLE
// reading lists  https://www.comicbookherald.com/reading-dc-comics/
// batman reading list https://www.comicbookherald.com/reading-dc-comics/batman-reading-order/
// good reads 
  const characterSeed = [
      {
          name: "batman",
          link: "https://dc.fandom.com/wiki/Batman",
          img: "#.png",
          info: "badass hero kicks villains butt",
          series: ["new52", "rebirth"]
      },
      {
        name: "superman",
        link: "https://dc.fandom.com/wiki/Superman",
        img: "#.png",
        info: "smallville",
        series: ["new52", "rebirth"]
      }
  ];

const seriesSeed = [
    {
        series: "new52",
        character: "batman",
        name: "batman",
        synopsis: "batman fights joker...",
        volumes: ["Vol 1: Court of Owls", "Vol 2: City of Owls", "Vol 3: Death of the Family", "Vol 4: Zero Year - Secret City", "Vol 5: Zero Year - Dark City", "Vol 6: Graveyard Shift", "Vol 7: Endgame", "Vol 8: Superheavy", "Vol 9: Bloom", "Vol 10: Epilogue"],
        extras: ["DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"]
    }, 
    {
        series: "new52",
        character: "batman",
        name: "Batman: Detective Comics",
        synopsis: "batman fights joker...",
        volumes: ["Vol 1: Faces of Death", "Vol 2: Scare Tactics", "Vol 3: Emperor Penguin", "Vol 4: The Wrath", "Vol 5: Gothtopia", "Vol 6: Icarus", "Vol 7: Anarky", "Vol 8: Blood of Heroes", "Vol 9: Gordon at War", "Vol 10: Epilogue"],
    }, 

]

// const seriesSeed = [
//   {
//       series: "new52",
//       character: "batman",
//       name: "batman",
//       synopsis: "batman fights joker...",
//       volumes: {"vol": "1: Court of Owls", "vol": "2: City of Owls", "vol": "3: Death of the Family", "vol": "4: Zero Year - Secret City", "vol": "5: Zero Year - Dark City", "vol": "6: Graveyard Shift", "vol": "7: Endgame", "vol": "8: Superheavy", "vol": "9: Bloom", "vol": "10: Epilogue"},
//       extras: ["DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"]
//   }, 
//   {
//       series: "new52",
//       character: "batman",
//       name: "Batman: Detective Comics",
//       synopsis: "batman fights joker...",
//       volumes: {"vol": "1: Faces of Death", "vol": "2: Scare Tactics", "vol": "3: Emperor Penguin", "vol": "4: The Wrath", "vol": "5: Gothtopia", "vol": "6: Icarus", "vol": "7: Anarky", "vol": "8: Blood of Heroes", "vol": "9: Gordon at War", "vol": "10: Epilogue"},
//   }, 

// ]

const volumeSeed = [
  {

  }
]

const notesSeed = [
    {
        name: "DC Comics: Zero Year",
        message: "Read after vol 4: Zero Year- Secret City "
    },
    {
        name: "The Joker: Endgame",
        message: "Read after Vol 7: Endgame"
    },
    {
        name: "Batman vs. Superman: The Greatest Battles",
        message: "Read after entire series"
    }
];

db.Character
  .remove({})
  .then(() => db.Character.collection.insertMany(characterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Series
  .remove({})
  .then(() => db.Series.collection.insertMany(seriesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Notes
  .remove({})
  .then(() => db.Notes.collection.insertMany(notesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });