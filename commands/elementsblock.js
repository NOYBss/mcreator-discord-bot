const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Block')
    .setURL('https://mcreator.net/wiki/how-make-block')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Block is the basic unit in Minecraft. It is 3D object that can be placed in world.');

module.exports = {
    name: 'block',
    description: 'Block command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
