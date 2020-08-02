const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Plant')
    .setURL('https://mcreator.net/wiki/how-make-plant')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Plant is a block that spawns on grass and can be picked up, it can also grow.');

module.exports = {
    name: 'plant',
    description: 'Plant command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
