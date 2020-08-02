const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('Check Out MCreator Wiki')
    .setURL('https://mcreator.net/wiki')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Cannot find what you are looking for? Go here!');

module.exports = {
    name: 'forums',
    description: 'Forums command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
