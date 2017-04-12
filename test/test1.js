// test 1 - add message

// var ChatClient = require('../main/chatClient');

const chat = new ChatClient();

// room1 = на стороне клиента добавляем новыую комнату addRoom
const room1 = chat.addRoom({
    name: 'фa фa фa',
    user: 'Василиса',
    key: '123123'
});

// Добавляется сообщение в класс Room в метод addMessage
room1.addMessage('фa', 'Dron');

// Открывается комната
const room1_client2 = chat.openRoom({
    name: 'фa фa фa',
    user: 'Василиса',
    //key: '12312344'
});

// Открываются все сообщения
// var messages = room1_client2.messages.map(x => x.text);


let actual = room1_client2.getMessages()[0].text;
let expected = 'фa';
console.log('Client 2 should see room messages: ', 'expected: ', expected, 'actual:', actual,
    'Result: ', actual === expected ? 'Success' : 'Fail');





