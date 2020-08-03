const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator')
    .setURL('https://www.mcreator.net')
    .setColor(0xffffff)
    .setDescription('MCreator Bot Commands')
    .setFooter(
      'mc!about - About this bot.\n' +
      'mc!help - You are already here!\n' +
      'mc!elements - Learn more about mod elements.\n' +
      'mc!generators - Check out community generators.\n' +
      'mc!other - Other commands.\n'
      );

module.exports = {
    name: 'help',
    description: 'Help command for MCreator Discord Bot!',
    execute(message, args){
        message.channel.send(embed);
    }
}
