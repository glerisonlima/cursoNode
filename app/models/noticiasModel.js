function noticiasDAO(connection){
	this._connection = connection;
}

noticiasDAO.prototype.getNoticias = function(callback){
		this._connection.query('select * from noticias order by data_criacao desc', callback);
	}

noticiasDAO.prototype.getNoticia = function(id_noticia, callback){
		console.log(id_noticia.id_noticia);
		this._connection.query('select * from noticias where id_noticia='+id_noticia.id_noticia, callback);
	}

noticiasDAO.prototype.salvarNoticia = function(noticia, callback){
		this._connection.query('insert into noticias set ?', noticia, callback);
	}

noticiasDAO.prototype.get5UtimasNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}	

module.exports = function(){
	return noticiasDAO;
}