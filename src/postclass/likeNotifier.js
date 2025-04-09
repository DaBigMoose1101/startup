

class EventMessage{
    constructor(from, to, type, message){
        this.from = from;
        this.to = to;
        this.type = type;
        this.message = message;
    }
}

class LikeEventNotifier {
    from = "";
    socket;
    socketOpen = false;
    listeners = [];
  
    constructor() {
      let port = window.location.port;
      const protocol = window.location.protocol === "http:" ? "ws" : "wss";
      this.socket = new WebSocket(`${protocol}//${window.location.hostname}:${port}/ws`);
  
      this.socket.onopen = () => {
        this.socketOpen = true;
        console.log("WebSocket connection established.");
      };
  
      this.socket.onclose = () => {
        this.socketOpen = false;
        console.warn("WebSocket connection closed.");
      };
  
      this.socket.onerror = (err) => {
        console.error("WebSocket error:", err);
      };
  
      this.socket.onmessage = async (msg) => {
        const mssg = JSON.parse(await msg.data.text());
        this.receiveMessage(mssg);
      };
    }
  
    receiveMessage(message) {
      this.listeners.forEach((listener) => listener(message.message));
    }
  
    addListener(listener) {
      this.listeners.push(listener);
    }
  
    removeListener(listener) {
      this.listeners = this.listeners.filter((l) => l !== listener);
    }
  
    connect(user) {
      this.from = user;
      let mssg = new EventMessage(user, '', "register", "");
      this.socket.send(JSON.stringify(mssg));
    }
  
    disconnect() {
      let mssg = new EventMessage(this.from, '', "disconnect", "");
      this.socket.send(JSON.stringify(mssg));
    }
  
    setFrom(from) {
      this.from = from;
    }
  
    notifyAuthor(to) {
      let event = new EventMessage(this.from, to, "notify", `${this.from} liked your post!`);
      this.socket.send(JSON.stringify(event));
    }
  }
const likeNotifier = new LikeEventNotifier();
export  {likeNotifier};

