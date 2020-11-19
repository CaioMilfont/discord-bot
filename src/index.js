require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();

const link = require('./commands/link.js')
const help = require('./commands/help.js')


const commands = {
    link,
    help
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.channel.id !== process.env.CHANNEL_ID && msg.channel.guild.id !== process.env.GUILD_ID) return;

    const args = msg.content.split(' ');

    if (args === 0 || args[0].charAt(0) !== '!') return;

    const command = args.shift().substr(1);

    if (Object.keys(commands).includes(command)) commands[command](msg, args);
});

client.login(process.env.BOT_ID);