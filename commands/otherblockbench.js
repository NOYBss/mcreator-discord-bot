const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('Common BlockBench Model Issues')
    .setURL('https://mcreator.net/wiki/common-blockbench-issues-mcreator')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('You may have some problems with your BlockBench model, then check out this page!');

module.exports = {
    name: 'blockbench',
    description: 'BlockBench command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
