const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

const dataPath =
  path.join(__dirname, "data/videos.json");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* GET VIDEOS */

app.get("/api/videos", (req, res) => {

  try{

    const data =
      fs.readFileSync(dataPath);

    res.json(JSON.parse(data));

  }catch(err){

    res.json([]);

  }

});

/* ADD VIDEO */

app.post("/api/videos", (req, res) => {

  let videos = [];

  try{
    videos =
      JSON.parse(fs.readFileSync(dataPath));
  }catch{}

  videos.unshift(req.body);

  fs.writeFileSync(
    dataPath,
    JSON.stringify(videos, null, 2)
  );

  res.json({status:"ok"});

});

/* START SERVER */

app.listen(PORT, () => {

  console.log("🚀 Server running:");
  console.log(`http://localhost:${PORT}`);

});
