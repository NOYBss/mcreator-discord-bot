const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator Forums')
    .setURL('https://mcreator.net/forum')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('MCreator Forums are a great way to showcase your mods, ask for help, collaborate and see user-side tutorials to make your mod even better!');

module.exports = {
    name: 'forums',
    description: 'Forums command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
