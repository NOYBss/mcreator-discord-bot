const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator 1.16.x Data Pack Generator')
    .setURL('https://mcreator.net/plugin/64574/mcreator-116x-datapack-generator')
    .setColor(0xffffff)
    .setThumbnail('https://mcreator.net/sites/default/files/styles/thumbnail/public/2020-07/warped_nylium_side.png?itok=MVV2ybTp')
    .addField('Authors', 'U1timateJ7')
    .addField('Releases', '[Plugin Page](https://mcreator.net/plugin/64576/mcreator-113x-datapack-generator)')
    ;

module.exports = {
    name: 'datapack116',
    description: '1.16.x Data Pack Generator command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
