// main.js
const { Client, GatewayIntentBits } = require('discord.js');
const { ready } = require('./ready/index');
const { messageCreate } = require('./messageCreate/index');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions
    ]
});

client.login(process.env.DISCORD_TOKEN);

const Ready = new ready(client);
const MessageCreate = new messageCreate(client);


