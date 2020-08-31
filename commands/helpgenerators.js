const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator')
    .setURL('https://www.mcreator.net')
    .setColor(0xffffff)
    .setDescription('MCreator Bot Commands - Generators')
    .setFooter(
      'Other Generators\n' +
      "mc!datapack - 1.16.2 Data Pack Generator by Goldorion\n" +
      "mc!fabric - 1.16.2 Fabric Generator by ClothCreators\n" +
      "mc!forge <mc-version> - Provide a legacy generator version\n" +
      "mc!spigot - 1.16.2 Spigot Generator by ClothCreators\n"
      );

module.exports = {
    name: 'generators',
    description: 'About MCreator Generators.',
    execute(message, args){
        message.channel.send(embed);
    }
}
