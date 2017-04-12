class Room {

    constructor(data) {
        this.id = Date.now() * Math.random();
        this.name = data.name;
        this.messages = [];
        this.user = data.user || 'anonymous';
        this.key = data.key;
    }

    addMessage(data) {
        if (typeof data.text !== 'string') {
            return
        }

        let encryptedMessage = {
            text: encrypt(data.text, this.key),
            date: Date.now(),
            user: data.user
        };

        this.messages.push(encryptedMessage);
    }

    getMessages() {

        return this.messages.map(message => {
            return {
                date: message.date,
                id: message.id,
                user: message.user,
                text: decrypt(message.text, this.key)
            };
        });

    }

}