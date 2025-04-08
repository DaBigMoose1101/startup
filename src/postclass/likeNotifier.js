

class EventMessage{
    constructor(from, to, type, message){
        this.from = from;
        this.to = to;
        this.type = type;
        this.message = message;
    }
}

class LikeEventNotifier{
    from;
    message;

    constructor(from){
        this.from = from;
        this.message = "";
        let port = window.location.port;
        const protocol = window.location.protocol === "http" ? "ws" : "wss";
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            let mssg  = new EventMessage(this.from, '', "register", "");
            this.socket.send(JSON.stringify(mssg));
        };
        this.socket.onclose = (event) => {
            let mssg = new EventMessage(this.from, '', "disconnect", "");
            this.socket.send(JSON.stringify(mssg));
        };
        this.socket.onmessage = async (msg) =>{
            let mssg = JSON.parse(await msg.data.text);
            this.recieveMessage(mssg);
        };

        
    }

    recieveMessage(message){
        this.message = message.message;
    }
    
    getMessage(){
        return message;
    }

    setFrom(from){
        this.from = from;
    }

    notifyAuthor(to){
        let event = new EventMessage(this.from, to, "notify", `${this.from} liked your post!`);
        this.socket.send(JSON.stringify(event));
    }
}

export default LikeEventNotifier;

