const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('Invalid Command')
    .setURL('https://mcreator.net/')
    .setColor(0xffffff)
    .setThumbnail('https://i1.pngguru.com/preview/967/643/692/sad-emoticon-png-clipart-thumbnail.jpg')
    .setDescription('Invalid Command - Type mc!help to see commands!');

module.exports = {
    name: 'invalid',
    description: 'Invalid command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
