
class ChatServer {
    constructor() {
        this.rooms = [];
    }

    addRoom(data) {
        data = JSON.parse(data);

        const room = new Room(data);
        this.rooms.push(room);

        return JSON.stringify({
            name: room.name,
            id: room.id
        });
    }

    getRooms() {
        return JSON.stringify(this.rooms);
    }

    openRoom(data) {
        data = JSON.parse(data);

        const room = this.rooms.find(x => x.name === data.name);

        return JSON.stringify(room);
    }

    addMessageByRoomName(data){
        data = JSON.parse(data);

        const room = this.rooms.find(x => x.name === data.room);

        room.addMessage({
            text: data.text,
            user: data.user
        });

        return JSON.stringify(room.getMessages())
    }

    getMessagesByRoomName(nameRoom){

        const room = this.rooms.find(x => x.name === nameRoom);
        return JSON.stringify(room.getMessages())
    }

}

// module.exports = ChatServer;