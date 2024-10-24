const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose')
const userModel = require("./model")
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.post('/Contact', (req, res) => {
 
    let {name, mobile , add} = req.body
    let user = userModel.create({
        name,
        mobile,
        add
    })
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});