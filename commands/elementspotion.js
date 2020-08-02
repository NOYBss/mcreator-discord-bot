const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Potion')
    .setURL('https://mcreator.net/wiki/how-make-potion')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Potion is an effect that can be given to entities.');

module.exports = {
    name: 'potion',
    description: 'Potion command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
