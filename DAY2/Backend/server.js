import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("server is read!");
});

const port = process.env.PORT || 3000;
