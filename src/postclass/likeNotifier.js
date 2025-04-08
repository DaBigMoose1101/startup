

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
    to;
    message;

    constructor(){
        mssg = "";
        let port = window.location.port;
        const protocol = window.location.protocol === "http" ? "ws" : "wss";
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            let mssg  = new EventMessage(from, '', "register", "");
            this.socket.send(mssg);
        };
        this.socket.onclose = (event) => {
            let mssg = new EventMessage(from, '', "disconnect", "");
            this.socket.send(mssg);
        };
        this.socket.onmessage = async (msg) =>{
            let mssg = JSON.parse(await msg.data.text);
            recieveMessage(mssg);
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

    setTo(to){
        this.to = to;
    }

    notifyAuthor(from, to){
        let event = new EventMessage(from, to, "notify", `${from} liked your post!`)
    }
}

const likeEventNotifier = new LikeEventNotifier()

