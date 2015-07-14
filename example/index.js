var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({ port: 3000 });

server.register({register: require('./service-plugin')}, function (err) {});

server.register({register: require('./view-plugin')}, function (err) {});

server.register({ register: require('lout') }, function(err) {});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
