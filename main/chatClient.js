// var ChatServer = require('../server/chatServer.js');
const SERVER = new ChatServer();

class ChatClient {
    constructor() {

        this.rooms = JSON.parse(SERVER.getRooms());
        console.log(this.rooms,  ' - this rooms')
    }

    addRoom(data) {
        if (typeof data.name !== 'string') {
            console.log('error !');
            return;
        }

        const response = SERVER.addRoom(JSON.stringify(data));
        console.log(response, ' -----  response'); ///////////////////////////////////////////////////


        const room = new RoomClient(Object.assign(
            JSON.parse(response), {
                user: data.user,
                key: data.key
            }
        ));

        this.rooms.push(room);

        return room;
    }

    openRoom(data) {
        if (typeof data.name !== 'string') {
            console.log('error !');
            return;
        }

        const response = SERVER.openRoom(JSON.stringify(data));

        return new RoomClient(Object.assign(
            JSON.parse(response),
            {
                user: data.user
            }
        ));
    }

}


// module.exports = ChatClient;