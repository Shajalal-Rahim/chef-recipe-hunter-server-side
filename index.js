const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chef.json')


app.use(cors());

app.get('/', (req, res) => {
    res.send("server running")
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selecteChef = chefs.find(n => n.id === id);
    res.send(selecteChef);
})


app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})