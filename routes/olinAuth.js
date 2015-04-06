var router = express.Router();

router.get('/login', function(req, res) {
  res.redirect('http://www.olinapps.com/external?callback='+'http://localhost:3000/olinauth/auth');
})

router.get('/logout', function(req, res) {
  req.session.olinuser = null;

  res.redirect('/');
})
