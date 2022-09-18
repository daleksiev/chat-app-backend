const clients = new Set();
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 5050 });

wss.on('connection', ws => {
    clients.add(ws);
    ws.send('Hello! Message From Server!!');
    ws.on('message', message => console.log(`Received message => ${message}`));
    ws.on('close', () => clients.delete(ws));

})
console.log("The WebSocket server is running on port 5050");
