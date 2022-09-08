const { Client, Collection } = require("discord.js")
const client = new Client({ intents: 513 });
const dotenv = require('dotenv');
dotenv.config();

['commands', 'buttons'].forEach(x => client[x] = new Collection());

['CommandUtil', 'EventUtil', 'ButtonUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });


client.login(process.env.DISCORD_TOKEN);