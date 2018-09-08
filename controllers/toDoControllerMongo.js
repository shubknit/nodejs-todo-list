var bodyparser = require('body-parser');

var mongoose = require('mongoose');

// connect to mongodb database

mongoose.connect('mongodb://test:test123@ds149742.mlab.com:49742/tododb');

// set schema

var todoSchema = new mongoose.Schema({
	item: String
})

// set collection with schema made
var Todo = mongoose.model('todocollection',todoSchema);


// add item
/*var itemOne = Todo({item: 'walking'}).save(function(err){

	if (err) throw err;
	console.log('item saved in database')

}); */

module.exports = function(app){
 
  	var urlEncodedParser = bodyparser.urlencoded({extended: false});

	app.get('/todo', function(req, res){
		Todo.find({},function(err,data){
			if(err) throw err;
			res.render("todo", {data: data})	
		})
	});

	app.post('/todo', urlEncodedParser, function(req, res){

		var value = req.body;		
		Todo(value).save(function(err, data){
			if(err) throw err;
			res.json(data);
		})
		
	});

	app.delete('/todo/:itemvalue', function(req, res){
		var value = req.params.itemvalue;
		Todo.find({item: value}).remove(function(err, data){
		  res.json(data);
		})
	
	});

}