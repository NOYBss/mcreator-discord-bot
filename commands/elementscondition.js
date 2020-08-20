const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Use Conditions')
    .setURL('https://mcreator.net/wiki/how-use-conditions')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Conditions are a new feature under procedures. Check out the wiki page for more info.');

module.exports = {
    name: 'condition',
    description: 'Condition command.',
    execute(message, args){
        message.channel.send(embed);
    }
}