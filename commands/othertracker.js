const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator Tracker')
    .setURL('https://mcreator.net/tracker')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Found a bug, or want a feature! Check out this page! Do not forgot to provide your MCreator log and your workspace when you are opening a bug report!');

module.exports = {
    name: 'tracker',
    description: 'Tracker command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
