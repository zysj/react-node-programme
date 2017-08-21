var express = require('express');
var app = new express();
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var methodOverride = require('method-override');
var router = express.Router();
var setting = require('./Setting.js');



app.use(logger('dev'));
app.use(bodyParser.json());// for parsing application/json,解析请求类型为application/json的数据
app.use(bodyParser.urlencoded({extend:true})) // for parsing application/x-www-form-urlencoded,解析请求类型为application/x-www-form-urlencoded的数据
app.use(methodOverride());
app.use(cookieParser());
app.use(flash());
app.use(express.static(path.join(__dirname,'..')));
app.use(session({
	cookie:{maxAge: 1000 * 60 * 60 * 24 * 30}
}))

app.use(function(req,res,next){
	res.locals.user = res.session.user;

	var err = req.flash('err');
	var success = req.flash('success');

	res.locals.err = err.length ? err : null;
	res.locals.success = success.length ? success : null;

	next();
});



// catch 404 and forward to error handler
app.use(function(req,res,next){
	var err = new Error('NOT FOUND');
	err.status = 404;
	next(err);
})

// error handlers

// development error handler
// will print stacktrace
if(app.get('env') === 'development'){
	app.use(function(err,req,res,next){
		res.status(err.status || 500);
		res.render('error',{
			message:err.message,
			error:{}
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err,req,res,next){
	res.status(err.status || 500);
	res.render('error',{
		message:err.message,
		error:{}
	});
});

app.listen(3000);