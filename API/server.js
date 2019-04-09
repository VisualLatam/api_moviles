
//CONECTA CONTROLADORES,BASE DE DATOS,MODELOS CREADOS,BODY PARSER Y RUTAS CREADAS

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose=require('mongoose'),
  Task=require('./api/models/todoListModel'),
  bodyParser=require('body-parser');

  //INSTANCE CONNECTION URL
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/** app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });*/

//IMPORTANDO LAS RUTAS
var routes= require('./api/routes/todoListRoutes');
routes(app);



app.listen(port);

console.log('RESTful API servidor iniciado en puerto: ' + port);