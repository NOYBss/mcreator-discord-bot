const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('Testing Command')
    .setURL('https://mcreator.net')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .addField('Test Field', 'Test Field Description', true)
    .addField('Test Field', 'Test Field Description', false)
    ;

module.exports = {
    name: 'test',
    description: 'Test command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
