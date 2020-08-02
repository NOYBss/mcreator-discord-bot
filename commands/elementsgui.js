const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('GUI Editor')
    .setURL('https://mcreator.net/wiki/gui-editor')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('GUI is a displayable panel with elements such as buttons, labels, slots, ...');

module.exports = {
    name: 'gui',
    description: 'GUI command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
