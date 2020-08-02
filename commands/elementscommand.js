const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Command')
    .setURL('https://mcreator.net/wiki/how-make-command')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Command is a set of text that triggers action when player types it into chat.');

module.exports = {
    name: 'command',
    description: 'Command command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
