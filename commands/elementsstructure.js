const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Structure')
    .setURL('https://mcreator.net/wiki/how-make-structure')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Structure spawn is a set of blocks that spawns in based on defined conditions.');

module.exports = {
    name: 'structure',
    description: 'Structure command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
