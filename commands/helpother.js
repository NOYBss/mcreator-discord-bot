const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator')
    .setURL('https://www.mcreator.net')
    .setColor(0xffffff)
    .setDescription('MCreator Bot Commands - Other')
    .setFooter(
      'Other\n' +
      'mc!blockbench - About BlockBench.\n' +
      'mc!donate - Donate to the MCreator developers.\n' +
      'mc!forums - Check out MCreator Forums!\n' +
      'mc!issues - MCreator Troubleshooting\n' +
      `mc!newmc - Info about new mc version support for MCreator.\n` +
      'mc!plugins - Explore MCreator Plugins!\n' +
      'mc!tracker - Go to MCreator Tracker.\n' +
      'mc!wiki - If provided with a argument, bot will send a link according to the argument, else it will send MCreator wiki home page.\n'
      );

module.exports = {
    name: 'other',
    description: 'Help about other MCreator stuff.',
    execute(message, args){
        message.channel.send(embed);
    }
}
