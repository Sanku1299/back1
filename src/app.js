const express = require('express');

const app = express();

app.use("/home", (req,res) => {
    res.send("Home")
});

app.use("/test", (req,res) => {
    res.send("test")
});

app.use("/", (req,res)=>{
    res.send("H")
});

app.listen(7777, ()=> {
    console.log("Server is running on port 7777")
});