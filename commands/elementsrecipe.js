const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Recipe')
    .setURL('https://mcreator.net/wiki/how-make-recipe')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Recipe is a defined set of blocks and items that gives you new block or item.');

module.exports = {
    name: 'recipe',
    description: 'Recipe command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
