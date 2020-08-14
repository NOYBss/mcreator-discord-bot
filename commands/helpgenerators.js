const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator')
    .setURL('https://www.mcreator.net')
    .setColor(0xffffff)
    .setDescription('MCreator Bot Commands - Generators')
    .setFooter(
      'Other Generators\n' +
      "mc!datapack-1.13 - Check out U1timateJ7's 1.13.x Data Pack Generator.\n" +
      "mc!datapack-1.16 - Check out U1timateJ7's 1.16.x Data Pack Generator.\n" +
      "mc!fabric - Check out Goldorion's Fabric Generator.\n" +
      "mc!forge-1.12 - Check out Klemen's 1.12.2 Forge Generator.\n" +
      "mc!spigot - Check out Goldorion's Spigot Plugin Generator.\n"
      );

module.exports = {
    name: 'generators',
    description: 'About MCreator Generators.',
    execute(message, args){
        message.channel.send(embed);
    }
}
