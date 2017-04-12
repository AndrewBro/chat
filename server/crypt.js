function encrypt(message, inputKey) {
    // message = ф
    // inputKey 123123
    const shift = inputKey.split('').reduce((p, c) => p + c.charCodeAt(), 0);
    // shift = 300
    return message.split('').map(letter => String.fromCharCode(letter.charCodeAt() - shift)).join('');
}

function decrypt(message, inputKey) {
    const shift = inputKey.split('').reduce((p, c) => p + c.charCodeAt(), 0);
    return message.split('').map(letter => String.fromCharCode(letter.charCodeAt() + shift)).join('');
}






























// encrypt('aaaaa',123);

// function encrypt(message, inputKey) {
//
//     return String.fromCharCode(message.charCodeAt() + inputKey);
//
// }
//
//
// function decrypt(message, inputKey){
//
//     // String.fromCharCode((String.fromCharCode(message.charCodeAt() - inputKey)).charCodeAt() + inputKey)
//     //     .................String.fromCharCode('A'.charCodeAt() + 3000)
//     return String.fromCharCode((String.fromCharCode(message.charCodeAt() - inputKey)).charCodeAt() + inputKey);
//
// }
//


// function encrypt(message, inputKey) {
//
//     let alphabet = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЬЫЭЮЯабвгдежзиклмнопрстуфхцчшщыьэюяABCDEFGHIJKLMNOPQRSTUYWXVZ';
//
//     function shiftAlphabet(letter, shift) {
//
//         console.log(letter + ' - letter - буква');
//         console.log(shift + ' - shift - количество');
//         // return shift + letter.charCodeAt() % alphabet.length;
//         // console.log(letter.charCodeAt() + shift);
//         // return shift.charCodeAt() + letter;
//
//         // String.fromCharCode(String.fromCharCode('A'.charCodeAt() - 3000)).charCodeAt() + 3000)
//         // String.fromCharCode('A'.charCodeAt() + 30)
//         // return alphabet[((shift + letter.charCodeAt()) % alphabet.length)];
//     }
//
//     // function myEncrypt() {
//     //     return inputKey.split('');
//     // }
//
//     return message;
// }

// function decrypt(message, inputKey){
//     //
//     // let alphabet = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЬЫЭЮЯабвгдежзиклмнопрстуфхцчшщыьэюяABCDEFGHIJKLMNOPQRSTUYWXVZ';
//     //
//     // function shiftAlphabet(letter, shift) {
//     //
//     //     return shift + letter.charCodeAt() % alphabet.length;
//     //     // return alphabet[((shift + letter.charCodeAt()) % alphabet.length)];
//     // }
//     //
//     // function myDecrypt() {
//     //     return inputKey.split('').reduce((p, c) => p + c.charCodeAt(), 0);
//     // }
//     return message/*.split('').map(letter => shiftAlphabet(letter, myDecrypt())).join('')*/;
//
// }












// function decrypt() {
//     var message = document.getElementById('message').value;
//     var shift = parseInt(document.getElementById('shift').value);
//     var shiftedAlphabet = shiftAlphabet(shift);
//     var encryptedMessage = '';
//     for (var i = 0; i < message.length; i++) {
//         if (message[i] == ' ') {
//             encryptedMessage = encryptedMessage.concat(' ');
//             continue
//         };
//         var indexOfLetter = shiftedAlphabet.indexOf(message[i].toUpperCase());
//         encryptedMessage = encryptedMessage.concat(alphabet[indexOfLetter]);
//     }
//     document.getElementById('cipher').value = encryptedMessage.toLowerCase();
// }
// }
//
// encrypt();

// function encrypt(){
//
//     let inputKey = room1.key;
//     let alphabet = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЬЫЭЮЯабвгдежзиклмнопрстуфхцчшщыьэюяABCDEFGHIJKLMNOPQRSTUYWXVZ';
//
//     function shiftAlphabet(letter, shift) {
//         let shiftedAlphabet = alphabet[((shift + letter.charCodeAt()) % alphabet.length)]; //новый алфавит
//         return shiftedAlphabet;
//     }
//
//     function myEncrypt() {
//         return inputKey.split('').reduce((p, c) => p + c.charCodeAt(), 0);
//     }
//
//
//     function encrypted() {
//         let message = inputKey;
//         let shift = myEncrypt();
//         return message.split('').map(letter => shiftAlphabet(letter, shift)).join('');
//     }
//
//     return encrypted();
// }