const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('Donate to The MCreator Developers')
    .setURL('https://mcreator.net/donate')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Help MCreator Developers cover costs of development and website and show them your support by donating.');

module.exports = {
    name: 'donate',
    description: 'Donate command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
