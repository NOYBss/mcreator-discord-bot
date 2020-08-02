const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Tool')
    .setURL('https://mcreator.net/wiki/how-make-tool')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Tool is an item that helps you dig or attack faster and better than using hand.');

module.exports = {
    name: 'tool',
    description: 'Tool command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
