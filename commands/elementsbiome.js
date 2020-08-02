const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Biome')
    .setURL('https://mcreator.net/wiki/how-make-biome')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Biome is a specific area with defined world generation, color, weather and fauna.');

module.exports = {
    name: 'biome',
    description: 'Biome command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
