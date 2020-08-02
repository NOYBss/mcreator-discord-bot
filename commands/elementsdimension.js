const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Dimension')
    .setURL('https://mcreator.net/wiki/how-make-dimension')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Dimension is a world that is generated, has own properties and can have a portal.');

module.exports = {
    name: 'dimension',
    description: 'Dimension command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
