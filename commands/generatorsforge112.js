const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('1.12.2 Forge Generator')
    .setURL('https://mcreator.net/plugin/64513/minecraft-1122-generator')
    .setColor(0xffffff)
    .setThumbnail('https://mcreator.net/sites/default/files/styles/thumbnail/public/2020-07/forge.png?itok=9magLP49')
    .setDescription('Minecraft Forge mods are java based mods that work on Minecraft Java Edition and require Minecraft Forge to be installed on clients (and the server) in order for them to work.');

module.exports = {
    name: 'forge112',
    description: '1.12.2 Forge Generator command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
