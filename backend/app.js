const express = require("express");

const app = express();

app.post("/home",()=>{
    console.log("Home page")
})

app.listen(3000,()=>{console.log("Listening on port 3000")})