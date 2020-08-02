const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Fuel')
    .setURL('https://mcreator.net/wiki/how-make-fuel')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Fuel is a block or item that can be used as fuel in furnaces.');

module.exports = {
    name: 'fuel',
    description: 'Fuel command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
