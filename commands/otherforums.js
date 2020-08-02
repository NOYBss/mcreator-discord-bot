const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Fluid')
    .setURL('https://mcreator.net/forum')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Check out MCreator forums!');

module.exports = {
    name: 'forums',
    description: 'Forums command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
