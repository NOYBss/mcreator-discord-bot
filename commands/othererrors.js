const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('Gradle setup and build errors')
    .setURL('https://mcreator.net/wiki/gradle-setup-errors')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('You may have some problems with your workspace, then check out this page!');

module.exports = {
    name: 'errors',
    description: 'Errors command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
