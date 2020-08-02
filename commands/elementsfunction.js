const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Function')
    .setURL('https://mcreator.net/wiki/how-make-function')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Function allows players to run command sets when called.');

module.exports = {
    name: 'function',
    description: 'Function command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
