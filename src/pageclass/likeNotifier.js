

class EventMessage{
    constructor(from, to, type, message){
        this.from = from;
        this.to = to;
        this.type = type;
        this.message = message;
    }
}

class likeEventNotifier{
    from;
    to;
    constructor(from, to){
        this.from = from;
        this.to = to;
        let port = window.location.port;
        const protocol = window.location.protocol === "http" ? "ws" : "wss";
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen


    }
}

