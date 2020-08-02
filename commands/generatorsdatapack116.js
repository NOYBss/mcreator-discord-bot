const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('1.16.x Data Pack Generator')
    .setURL('https://mcreator.net/plugin/64574/mcreator-116x-datapack-generator')
    .setColor(0xffffff)
    .setThumbnail('https://mcreator.net/sites/default/files/styles/thumbnail/public/2020-07/warped_nylium_side.png?itok=MVV2ybTp')
    .setDescription('Minecraft Data Packs are mods that work on Minecraft Java Edition and do not require any additional software or modloader installed but have a limited feature set.');

module.exports = {
    name: 'datapack116',
    description: '1.16.x Data Pack Generator command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
