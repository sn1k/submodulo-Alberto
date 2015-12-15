var _ = require('underscore');

// TODO: This shoul be read from a database
var heroes = [
  {
    name: 'El guardian entre el centeno',
    facts: [
      'J.D. Salinger',
      '8 edicion',
      '18€',
      ]
  },
  {
    name: 'Don Quijote',
    facts: [
      'Miguel de Cervantes',
      '101 edicion',
      '22€',
      ]
  },
  {
    name: 'La biblia',
    facts: [
      'Varios',
      '1231212312 edicion',
  	  '50€',
  	  ]
  },
    {
    name: 'Chistes de lepe',
    facts: [
      'Jaimito',
      '0 edicion',
  	  '1€',
  	  ]
  }
];


exports.index = function(req, res) {
  var names = heroes.map(function(p) { return p.name; });
  res.render('index', { heroes: names })
};

exports.hero = function(req, res) {
  var facts = _(heroes).detect(function (p) {
    return p.name == req.params.name;
  }).facts;
  res.json(facts);
}


exports.addFact = function(req, res) {
  var hero = _(heroes).detect(function(p) {
    return p.name == req.body.name;
  });
  if(req.body.fact==''){
	console.log('comentario nulo');
	var assert = require("assert");
	assert(req.body.fact,"COMENTARIO NULO")
  }
  else{
  	hero.facts.push(req.body.fact);
	console.log('Nuevo comentario en ' + hero.name + ': ' + req.body.fact);
  }


  res.json({status: 'ok' });
}
