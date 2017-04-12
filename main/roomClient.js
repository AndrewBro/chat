class RoomClient {

    constructor(data) {
        this.id = Date.now() * Math.random();
        this.name = data.name;
        this.messages = [];
        this.user = data.user || 'anonymous';
        this.key = data.key;
    }

    addMessage(string) {
        if (typeof string !== 'string') {
            return
        }
        const data = JSON.stringify({
            room: this.name,
            text: string,
            user: this.user
        });

        this.messages = JSON.parse(SERVER.addMessageByRoomName(data));
    }

    getMessages(){
        this.messages = JSON.parse(SERVER.getMessagesByRoomName(this.name));
        return this.messages;
    }
}
