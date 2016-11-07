module.exports.index = function(app, req,res){
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.noticiasModel(connection);

	noticiasModel.get5UtimasNoticias(function(error, result){
		res.render("home/index", {noticias: result} );
	});

	
}