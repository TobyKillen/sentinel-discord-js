class MessageCreate {
    constructor(client) {
        this.client = client;
        this.client.on('messageCreate', async message => {
            // This is the main function that will be called when a message is created
            // All Messages will be passed through these functions and rule sets
            this.deleteMessageIfContainsMention(message);
        });
    }

    async deleteMessageIfContainsMention(message) {
        const numberofMentions = message.mentions.users.size;
        if (numberofMentions > 0) {
            // Reply back to the user and allow an override by using the bots prefix
            await message.reply('Please do not mention other users in this channel');
            // Delete the message
            // await message.delete();
        }
    }

}

module.exports = {
    messageCreate: MessageCreate
};