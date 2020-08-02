const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Creative Tab')
    .setURL('https://mcreator.net/wiki/how-make-creative-inventory-tab')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Creative tab is a set of items and blocks that can be seen in creative inventory.');

module.exports = {
    name: 'creativetab',
    description: 'Creative Tab command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
