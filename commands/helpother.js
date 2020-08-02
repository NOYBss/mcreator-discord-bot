const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator')
    .setURL('https://www.mcreator.net')
    .setColor(0xffffff)
    .setDescription('MCreator Bot Commands - Other')
    .setFooter(
      'Other\n' +
      'mc!blockbench - Common BlockBench issues.\n' +
      'mc!donate - Donate to the MCreator developers.\n' +
      'mc!errors - Common Gradle and build errors.\n' +
      'mc!forums - Go to MCreator Forums.\n' +
      'mc!plugins - Explore MCreator Plugins!\n' +
      'mc!tracker - Go to MCreator Tracker.\n' +
      'mc!wiki - Cannot find what you are looking for? Go here!\n'
      );

module.exports = {
    name: 'other',
    description: 'Help about other MCreator stuff.',
    execute(message, args){
        message.channel.send(embed);
    }
}
