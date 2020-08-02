const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('Procedure System')
    .setURL('https://mcreator.net/wiki/procedure-system')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Procedure is a graphically designed flow of events with optional global triggers.');

module.exports = {
    name: 'procedure',
    description: 'Procedure command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
