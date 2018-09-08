var bodyparser = require('body-parser');

module.exports = function(app){
 	var todolist = [{item:'wakeup'}, {item: 'running'}, {item: 'rest'}];
 	var urlEncodedParser = bodyparser.urlencoded({extended: false});

	app.get('/todo', function(req, res){
		res.render("todo", {data: todolist})
	});

	app.post('/todo', urlEncodedParser, function(req, res){
		todolist.push(req.body);
		res.json(todolist);
	});

	app.delete('/todo/:itemvalue', function(req, res){
		var value = req.params.itemvalue;
		todolist = todolist.filter(function(data){
	  		return data.item !== value
	  })
	  res.json(todolist);
	});

}