var express = require('express');
var passport = require('../server').passport;
var router = express.Router();


router.post('/login', passport.authenticate('local-login'),function(req,res){
    res.send({name:req.user.name});
});

router.post('/register',function(req,res){
    req.queries.registerUser(req,res);
});

 router.get('/logout', function(req, res) {
    req.logout();
    req.session.destroy();
    req.session = null;
    req.user = null; 
    res.clearCookie('user');
    res.send('logged out');
});


module.exports = router;