const express = require('express');
const uuid = require('uuid');
const app = express();

let users = {};
let scores = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;



app.get('*', (req, res) => {
    res.send({msg:'Block Bonanza service'});
});

app.listen(port, () => {
    console.log(`LIsting on port ${port}`);
});