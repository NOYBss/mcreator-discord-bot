const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator 1.13.x Data Pack Generator')
    .setURL('https://mcreator.net/plugin/64576/mcreator-113x-datapack-generator')
    .setColor(0xffffff)
    .setThumbnail('https://mcreator.net/sites/default/files/styles/thumbnail/public/2020-07/horn_coral_block.png?itok=HHHYR2ej')
    .addField('Authors', 'U1timateJ7')
    .addField('Releases', '[Plugin Page](https://mcreator.net/plugin/64576/mcreator-113x-datapack-generator)')
    ;

module.exports = {
    name: 'datapack113',
    description: '1.13.x Data Pack Generator command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
