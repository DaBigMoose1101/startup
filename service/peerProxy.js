const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
  // Create a websocket object
  const socketServer = new WebSocketServer({ server: httpServer });
  const users = new Map();

  socketServer.on('connection', (socket) => {
    socket.isAlive = true;
    socket.on('message', function message(data) {
      const parsed = data.toJSON()
      if(parsed.type === "register"){
        users.set(parsed.from, socket);
      }
      if(parsed.type === "like_post"){
        let client = users.get(type.to);
        if (client !== socket && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
        else{
          
        }
      }
    });

    // Respond to pong messages by marking the connection alive
    socket.on('pong', () => {
      socket.isAlive = true;
    });
  });

  // Periodically send out a ping message to make sure clients are alive
  setInterval(() => {
    socketServer.clients.forEach(function each(client) {
      if (client.isAlive === false) return client.terminate();

      client.isAlive = false;
      client.ping();
    });
  }, 10000);
}

module.exports = { peerProxy };
