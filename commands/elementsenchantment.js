const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Enchantment')
    .setURL('https://mcreator.net/wiki/how-make-enchantment')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Enchantment is a modifier that adds special abilities to items when applied.');

module.exports = {
    name: 'enchantment',
    description: 'Enchantment command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
