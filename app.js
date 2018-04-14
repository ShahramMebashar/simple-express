const express = require('express');
const app = express();
const hbs = require('hbs');

//view engine settings
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//static files
app.use(express.static(__dirname + '/public'));


// routers
app.get('/', (req, res) => {
    res.render('home', {title: 'hello'})
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        message: 'this websie is created by shahram with express mvc on top of nodejs platform v8',
        currentYear: new Date().getFullYear()
    });
})

app.listen(3000);