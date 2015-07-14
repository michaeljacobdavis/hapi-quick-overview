// Plugin
var Path = require('path');
exports.register = function (plugin, options, next) {

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
};

exports.register.attributes = {
    name: 'views',
    version: '1.0.0'
};
