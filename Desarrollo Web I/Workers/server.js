//First, we define the variables we're gonna use given the libraries we will use
var express = require('express'),
    app = express(),
    path = require('path');


app.use(express.static(__dirname + '/'));
//We define a homepage, a root for our application.
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Calling an instance of a express.Router.
var adminRouter = express.Router();

//We start by building a middleware to verify every request made to this group of routes
//middlewares receive a request from client, can emit a response in case there's something to say, and NEED to have and apply a 'next' argument,
//so we can continue with routing.
adminRouter.use(function(req, res, next) {
    //user makes a request via browser. That request is f*cking large, so it's separated in some parameters we can access to, i.e method, url.
    console.log(req.method, req.url, req.params);
    next();
});

//This will be the root of the admin routes
adminRouter.get('/', function(req, res) {
    res.send('I am the dashboard!');
});

//A param middleware to make some verifications. Notice it takes another argument: 'name'
adminRouter.param('name', function(req, res, next, name) {

    // 'name' is given by ':name' param on the subsequent route, and that's what we're gonna use to make validations
    console.log('doing name validations on ' + name);
    //now we put 'name' on the request, given that we took it to examining it, so we can deliver it to the next call of the router
    req.name = name;
    next();
});

//localhost:1337/admin/hello/:name
adminRouter.get('/hello/:name', function(req, res) {
    res.send('hello ' + req.name + '!');
});

//localhost:1337/admin/users
adminRouter.get('/users', function(req, res) {
    res.send('I show all the users!');
});

//localhost:1337/admin/users/:name
adminRouter.get('/users/:name', function(req, res) {
    res.send('hello ' + req.params.name + '!');
});

//localhost:1337/admin/posts
adminRouter.get('/posts', function(req, res) {
    res.send('I show all the posts!');
});

app.route('/login')

// show the form (GET http://localhost:1337/login)
.get(function(req, res) {
    res.send('this is the login form');
})

// process the form (POST http://localhost:1337/login)
.post(function(req, res) {
    console.log('processing');
    res.send('processing the login form!');
});

//We finally tell our express app that we're going to use all those routes defined by adminRouter, and they're going to
//be 'children' of '/admin'
app.use('/admin', adminRouter);

//We tell our express app which port we're going to work with
app.listen(1337);
//And a last mandatory console.log so we can know what we're doing
console.log('1337 is the magic port!');
