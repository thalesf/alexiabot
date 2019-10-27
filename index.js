const Hapi = require('hapi');
const server = new Hapi.Server();
const app = require('./app'); // Your app

server.connection({
    port: process.env.PORT || 8888
});

server.route({
    path: '/',
    method: 'POST',
    handler: (request, response) => {
        app.handle(request.payload, (data) => {
            response(data);
        });
    }
});

server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
    app.saveSpeechAssets();
});