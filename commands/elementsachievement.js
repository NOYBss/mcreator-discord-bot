const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make an Advancement/Achievement')
    .setURL('https://mcreator.net/wiki/how-make-achievement')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Achievement/Advancement is a text displayed when user does something that is required to achieve.');

module.exports = {
    name: 'achievement',
    description: 'Achievement command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
