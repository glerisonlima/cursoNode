var app = require('./config/server');

//Criando as rotas da aplicação
//var rotahome = require('./app/routes/home')(app);
//var rotaNoticias = require('./app/routes/noticias')(app);
//var rotaFormulario_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia')(app);
//fim rotas

//Iniciando servidor
app.listen(3000, function(){
	console.log('Servidor ON')
});
// fim servidor