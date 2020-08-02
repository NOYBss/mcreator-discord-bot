const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Loot Table')
    .setURL('https://mcreator.net/wiki/how-make-lot-table')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Loot table represents what items should be generated naturally in containers.');

module.exports = {
    name: 'loottable',
    description: 'Loot Table command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
