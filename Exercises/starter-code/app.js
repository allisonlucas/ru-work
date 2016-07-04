var express = require('express')
var app = express()
app.use(express.static(__dirname + '/public'));

/** Express Session Setup **/
var session = require('express-session')
app.sessionMiddleware = session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
})
app.use(app.sessionMiddleware)

/** End Express Session Setup **/


/** Body Parser Setup **/
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/** End Body Parser Setup **/

/** Database setup **/
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/jail')

var userSchema = mongoose.Schema({
    username : { type: String, required: true, unique: true },
    password : { type: String, required: true },
    role     : { type: String, required: true },
});
var User = mongoose.model('user', userSchema);
/** End database setup **/


/** Passport Config **/
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// When someone tries to log in to our site, how do we determine that they are who they say they are?
var bcrypt = require('bcryptjs')
passport.use(new LocalStrategy(
    // write local strategy here
    function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false); // No error and no user
            }
            // If we got this far, then we know that the user exists. But did they put in the right password?
            bcrypt.compare(password, user.password, function(error, matched){
                if (matched === true){
                    return done(null,user) // No error and this is the user they should be signed in as
                }
                else {
                    return done(null, false) // Passwords didn't match no error and no user
                }
            })
        });
    }
));

app.isAuthenticated = function(req, res, next){
    // If the current user is logged in, allow them through
    // else, kick them out to the login page.
    if(req.isAuthenticated()){
    // Middleware allows the execution chain to continue.
        return next();
    }
    // If not, redirect to login
    console.log('get outta here!')
    res.redirect('/');
}

app.warden = function(req,res,next){
    if (req.isAuthenticated() && req.user.role === 'warden') {
        return next()
    }
    res.redirect('/unauth')
}

app.cellCafe = function(req,res,next){
    if (req.isAuthenticated() && req.user.role === 'guard' || req.user.role === 'warden' || req.user.role === 'prisoner') {
        return next()
    }
    res.redirect('/unauth')
}

app.lobbyLounge = function(req,res,next){
    if (req.isAuthenticated() && req.user.role === 'guard' || req.user.role === 'warden' || req.user.role === 'visitor') {
        return next()
    }
    res.redirect('/unauth')
}

app.post('/signup', function(req, res){
    bcrypt.genSalt(11, function(error, salt){
        bcrypt.hash(req.body.password, salt, function(hashError, hash){
            var newUser = new User({
                username : req.body.username,
                role     : req.body.role,
                password : hash,
            });
            newUser.save(function(saveErr, user){
                if ( saveErr ) { res.send({ err:saveErr }) }
                else {
                    req.login(user, function(loginErr){
                        if ( loginErr ) { res.send({ err:loginErr }) }
                        else { res.send({success: 'success'}) }
                    })
                }
            })

        })
    })
})

app.post('/login', function(req, res, next){
    // use your local strategy here.
    passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.send({error : 'something went wrong :('}); }
    req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.send({success:'success'});
    });
  })(req, res, next);
})

app.get('/', function(req, res){
    res.sendFile('/html/login.html', {root: './public'})
})
app.get('/api/me', function(req,res){
    // send down the logged-in user.
})
app.get('/jail', function(req, res){
    res.sendFile('/html/jail.html', {root: './public'})
})
app.get('/lobby', app.lobbyLounge, function(req, res){
    res.sendFile('/html/lobby.html', {root: './public'})
})
app.get('/visitors-lounge', app.lobbyLounge, function(req, res){
    res.sendFile('/html/visitors-lounge.html', {root: './public'})
})
app.get('/cafeteria', app.cellCafe, function(req, res){
    res.sendFile('/html/cafeteria.html', {root: './public'})
})
app.get('/wardens-office', app.warden, function(req, res){
    res.sendFile('/html/wardens-office.html', {root: './public'})
})
app.get('/cell-e', app.cellCafe, function(req, res){
    res.sendFile('/html/cell-e.html', {root: './public'})
})
app.get('/cell-m', app.cellCafe, function(req, res){
    res.sendFile('/html/cell-m.html', {root: './public'})
})


app.listen(3000)
