const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator Discord Bot')
    .setURL('https://mcreator.net/')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription(
      'Bot Name: MCreator Discord Bot\n' +
      'Bot Version: 1.0.2\n' +
      'Bot Prefix: mc!\n' +
      '\n' +
      'Author: NOYB\n' +
      'License: MIT\n' +
      '\n' +
      'This Discord Bot is not a official MCreator/Pylo product,\nit does not have anything to do with MCreator or Pylo!\n'
    );

module.exports = {
    name: 'about',
    description: 'About command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
