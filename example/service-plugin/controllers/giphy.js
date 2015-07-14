var Wreck = require('wreck');

exports.roulette = {
    handler: function (request, reply) {
        Wreck.get('http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC', function (err, res, payload) {
            reply(payload).code(res.statusCode);
        });
    }
};
