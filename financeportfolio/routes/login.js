/**
 * New node file
 */
exports.login = function(req, res){
  res.render('login', { title: 'Express', error: "" });
};
