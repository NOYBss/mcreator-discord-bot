const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('Spigot Generator')
    .setURL('https://mcreator.net/plugin/64512/mcreator-fabric-generator')
    .setColor(0xffffff)
    .setThumbnail('https://mcreator.net/sites/default/files/styles/thumbnail/public/2020-07/type-spigot.png?itok=BXjvo4T4')
    .setDescription(
      'Spigot plugins are Java based server-side mods that work on Minecraft Java Edition and require Spigot server API installed, but do not require any special modifications of clients.\n' +
      '\n' +
      'Do not mix mods and plugins, they are completely diffrent things. Plugins are always server-sided, and they do not need to be installed on clients. You can add your custom commands with procedures by using this generator.\n'
    );

module.exports = {
    name: 'spigot',
    description: 'Spigot Generator command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
