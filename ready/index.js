class Index {
    constructor(client) {
        this.client = client;
        this.ready();
    }

    async ready() {
        this.client.on('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}`);
        });
    }

}




module.exports = {
    ready: Index
};