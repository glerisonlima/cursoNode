var mysql = require('mysql');

var conMySQL = function(){
	console.log('conexão estabeleciada!');
		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'root',
			database : 'portal_noticias'
		});
}

	module.exports = function(){
		console.log('carregado o modulo de conexão')
		return conMySQL;
	}