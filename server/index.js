console.log("Hello World")

const WebSocket = require ('ws')
const server = new WebSocket.Server({port: '8080'})

// This will set up a connection from a client 

server.on('connection', socket => {

    socket.on('message', message => {

        socket.send(`Aye Captain! ${message}`);


    });
});

