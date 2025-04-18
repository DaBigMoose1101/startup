const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
  // Create a websocket object
  const socketServer = new WebSocketServer({ server: httpServer });
  const users = new Map();

  socketServer.on('connection', (socket) => {
    socket.isAlive = true;
    socket.on('message', async function message(data) {
      const parsed = JSON.parse(data.toString())
      console.log(parsed);
      if(parsed.type === "register"){
        users.set(parsed.from, socket);
      }
      if(parsed.type === "notify"){
        let client = users.get(parsed.to);
        console.log(client);
        if (client && client !== socket && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      }
      if(parsed.type === "disconnect"){
        users.delete(parsed.from);
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
