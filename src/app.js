const express = require('express');

const app = express();

const {adminAuth,userAuth} = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user",userAuth, (req, res)=>{
    res.send("user login successful");
})

app.get("/admin/getData", (req,res)=>{
    res.send("All Data sent")
});

app.get("/admin/deleteData", (req,res)=>{
    res.send("All Data deleted")
});

// app.use("/home", (req,res) => {
//     res.send("Home")
// });

// app.use("/test", (req,res) => {
//     res.send("test")
// });

// app.use("/", (req,res)=>{
//     res.send("H")
// });

app.listen(7777, ()=> {
    console.log("Server is running on port 7777");
});