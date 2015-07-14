// Plugin
var Path = require('path');
var plugin = {
    register: function (plugin, options, next) {

        plugin.views({
            engines: {
                hbs: require('handlebars')
            },
            path: Path.join(__dirname, 'templates')
        });

        plugin.route({
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
                reply.view('index', {
                    heading: 'Hello!',
                    content: 'Hapi templates!'
                });
            }
        });

        next();
    }
};
plugin.register.attributes = {
    name: 'plugin',
    version: '1.0.0'
};

// Server
var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({ port: 3000 });

server.register({register: plugin}, function (err) {
    if (err) {
        console.error('Failed to load plugin:', err);
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
