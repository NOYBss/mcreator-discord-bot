const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('Fabric Generator')
    .setURL('https://mcreator.net/plugin/64512/mcreator-fabric-generator')
    .setColor(0xffffff)
    .setThumbnail('https://mcreator.net/sites/default/files/styles/thumbnail/public/2020-07/type-fabric.png?itok=6Z3JYiLs')
    .setDescription(
      'Fabric Minecraft mods are java based mods that work on Minecraft Java edition and require Fabric loader to be installed on clients (and the server) in order for them to work.\n' +
      '\n' +
      'This plugin is still in progress but it supports many features MCreator normally supports. If you found a bug you can report it to their [issue tracker](https://github.com/ClothCreators/MCreatorFabricGenerator/issues). If you want to contribute to the project, it is available on [GitHub](https://github.com/ClothCreators/MCreatorFabricGenerator).\n'
    );

module.exports = {
    name: 'fabric',
    description: 'Fabric Generator command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
