const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Tag')
    .setURL('https://mcreator.net/wiki/how-make-tag')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Tags are used to group elements using different tag types');

module.exports = {
    name: 'tag',
    description: 'Tag command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
