const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator')
    .setURL('https://www.mcreator.net')
    .setColor(0xffffff)
    .setDescription('MCreator Bot Commands')
    .setFooter(
      'mc!help - You are already here!\n' +
      'mc!elements - Shows a list of commands about MCreator mod elements.\n' +
      'mc!generators - Shows a list of commands about MCreator generators.\n' +
      'mc!other - Shows a list of commands about other MCreator stuff.\n'
      );

module.exports = {
    name: 'help',
    description: 'Help command for MCreator Discord Bot!',
    execute(message, args){
        message.channel.send(embed);
    }
}
