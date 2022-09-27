'use strict';


//Aqui estarão listadas as Rotas da aplicação
(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),            
            new Route('sobre', 'sobre.html'),
            new Route('contato', 'contato.html')
        ]);
    }
    init();
}());
