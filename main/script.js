//
// class Chat {
//     constructor() {
//         this.rooms = [];
//     }
//
//     addRoom(data) {
//         if (typeof data.name !== 'string') {
//             console.log('error !');
//         }
//         var room = new Room({
//             name: data.name,
//             user: data.user
//         });
//
//         this.rooms.push(room);
//
//         return room;
//     }
//
//     getRooms() {
//         return this.rooms
//     }
//
//     openRoom(name, user, key) {
//         var room = this.rooms.find(function(it) {
//             return it.name === name
//         });
//
//         room.setUser(user);
//         return room;
//     }
//
// }
//
// class Room {
//     constructor(data) {
//         this.id = Date.now() * Math.random();
//         this.name = data.name;
//         this.messages = [];
//         this.user = data.user || 'anonymous';
//         this.key = data.key;
//         this.validationString = encrypt({ valid: true }, data.key)
//     }
//     addMessage(string) {
//         if (typeof string !== 'string') {
//             return
//         }
//         this.messages.push(encrypt({
//             text: string,
//             date: Date.now(),
//             user: this.user
//         }, this.key))
//     }
//     getMessages(){
//         return this.messages
//     }
//
//     setUser(user){
//         this.user = user || 'anonymous';
//     }
//
// }
//
// var chat = new Chat();
// {
//     const room1 = chat.addRoom({
//         name: 'room1',
//         user: 'Huba Buba'
//     });
// }
//
// chat.openRoom('room1', 'Dron', key).addMessage('Hello, friend!');
// chat.openRoom('room1', 'Ivan').addMessage('hi !');
// chat.openRoom('room1', 'Dron').addMessage('How are you ?');
//
//
// console.log(chat.openRoom('room1').getMessages());
//
