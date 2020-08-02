const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Music Disc')
    .setURL('https://mcreator.net/wiki/how-make-music-disc')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Music disc is an item that can be played in jukeboxes.');

module.exports = {
    name: 'musicdisc',
    description: 'Music Disc command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
