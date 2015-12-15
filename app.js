
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/hero/:name', routes.hero);

/*
var assert = require("assert")
app.post('/hero/add-fact', function(){
	routes.addFact;
	var campo = routes.addFact;
	//assert(campo, "comentario");
	console.log(campo);
	if(campo==null){
		console.log("comentario nulo!");	
	}
	else{
		console.log("comentario creado correctamente");
	}
	
});
*/
app.post('/hero/add-fact',routes.addFact);

/* CONEXIÓN CON BASE DE DATOS
var connectionString = "postgres://khcatfzjwfhnvo:UJOmZax-0PhR9eTUO-vNqkw1_V@ec2-54-83-202-218.compute-1.amazonaws.com:5432/d8kn5mgp9ttf6i"

pg.connect(connectionString, function(err, client, done) {
   client.query('SELECT * FROM your_table', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
   });
});
*/

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
