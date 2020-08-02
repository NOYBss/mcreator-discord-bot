const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Food')
    .setURL('https://mcreator.net/wiki/how-make-food')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Food is an item that can be eaten and can give you potion effect.');

module.exports = {
    name: 'food',
    description: 'Food command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
