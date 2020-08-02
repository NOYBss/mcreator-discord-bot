const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Item')
    .setURL('https://mcreator.net/wiki/how-make-item')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Item is an object that can be held in hand. You can use it and can have damage.');

module.exports = {
    name: 'item',
    description: 'Item command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
