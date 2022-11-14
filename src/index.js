const express = require('express');

let PORT = 3000;
const path = require('path');
const hbs = require('hbs');
const requests = require('requests');

console.log(__dirname);
const app = express();


let staticpath = path.join(__dirname, '../public');//absolute path
let tempelatePath = path.join(__dirname, '../tempelates/views');//absolute path
let partialPath = path.join(__dirname, '../tempelates/partials'); //absolute path


app.set('view engine', 'hbs');
app.set('views', tempelatePath);
hbs.registerPartials(partialPath);
app.use(express.static(staticpath));


app.get('/', (req, res) => {
    res.render('index', {
        name: "Teja",
    });
});
app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/about/*', (req, res) => {
    res.render('404', {
        errorcomment: "Error",
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        errorcomment: "Error",
    });
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});