const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Fluid')
    .setURL('https://mcreator.net/wiki/how-make-fluid')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Fluid is a special block that can act as fluid. It will spread across the world.');

module.exports = {
    name: 'fluid',
    description: 'Fluid command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
