const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Ranged Item')
    .setURL('https://mcreator.net/wiki/how-make-ranged-item')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Ranged item shoots entities that act like projectiles and can have custom models.');

module.exports = {
    name: 'rangeditem',
    description: 'Ranged Item command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
