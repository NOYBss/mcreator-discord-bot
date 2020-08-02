const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Armor')
    .setURL('https://mcreator.net/wiki/how-make-armor')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Armor is an item that can be dressed up and gives you protection.');

module.exports = {
    name: 'armor',
    description: 'Armor command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
