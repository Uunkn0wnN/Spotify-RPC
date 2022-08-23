


const discord = require('discord.js-selfbot-v11');
const fs = require('fs');
const Eris = require("eris");
const bot = new Eris(process.env.TOKEN);
bot.connect();



const client = new discord.Client();
const keepAlive = require('./server.js');


const events = fs.readdirSync('./events/');
events.forEach(file => {
	const eventname = file.split('.')[0];
	const event = require(`./events/spotify`);
	client.on(eventname, event.bind(null, client));
});

keepAlive();
client.on("ready", () => {
  console.log(`berhasil login ke ${client.user.username} !!`); 
  });

client.login(process.env.TOKEN);
