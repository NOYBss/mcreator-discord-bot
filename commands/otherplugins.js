const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('Explore MCreator Plugins')
    .setURL('https://mcreator.net/plugins')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('There are many plugins for MCreator that you can use!');

module.exports = {
    name: 'plugins',
    description: 'Plugins command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
