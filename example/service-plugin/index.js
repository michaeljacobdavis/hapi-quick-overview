var Controllers = require('./controllers');

// Plugin
exports.register = function (plugin, options, next) {

    plugin.route([
        { method: 'GET', path: '/api/giphy/roulette', config: Controllers.Giphy.roulette }
    ]);

    next();
};

exports.register.attributes = {
    name: 'service',
    version: '1.0.0'
};
