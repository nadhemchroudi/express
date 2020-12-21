const express = require('express');
const path = require('path');
const logger = require ('./Logger/logger')

const app = express();

app.use(logger);
app.use(express.static(path.join(__dirname, 'Public')));

app.get('/Home',(req,res) => {
    res.sendFile(path.join(__dirname, 'Public' , 'Home.html'))
})
app.get('/ContactUs',(req,res) => {
    res.sendFile(path.join(__dirname, 'Public' , 'ContactUs.html'))
})
app.get('/OurServices',(req,res) => {
    res.sendFile(path.join(__dirname, 'Public' , 'OurServices.html'))
})

const port = 4000;

app.listen(port, () => console.log(`Server running on port ${port}`))