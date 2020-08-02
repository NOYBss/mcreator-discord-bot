const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator')
    .setURL('https://www.mcreator.net')
    .setColor(0xffffff)
    .setDescription('MCreator Bot Commands - Generators')
    .setFooter(
      'Other Generators\n' +
      'mc!datapack-1.13 - Go to 1.13.x Datapack Generator plugin page.\n' +
      'mc!datapack-1.16 - Go to 1.16.x Datapack Generator plugin page.\n' +
      'mc!fabric - Go to Fabric Generator plugin page.\n' +
      'mc!forge-1.12 - Go to Forge 1.12.2 Generator plugin page.\n' +
      'mc!spigot - Go to Spigot Generator plugin page.\n'
      );

module.exports = {
    name: 'generators',
    description: 'Help about MCreator Generators.',
    execute(message, args){
        message.channel.send(embed);
    }
}
