const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator Discord Bot')
    .setURL('https://mcreator.net/')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .addField('Author', 'NOYB')
    .addField('License', '[MIT License](https://opensource.org/licenses/MIT)')
    .addField('Issue Tracker', '[GitHub Issues](https://github.com/NOYBss/mcreator-discord-bot/issues)')
    .addField('Source Code', '[GitHub Repository](https://github.com/NOYBss/mcreator-discord-bot)')
    .addField('Disclaimer', 'This Discord Bot is not a official MCreator/Pylo product,\nit does not have anything to do with MCreator or Pylo!)
    ;

module.exports = {
    name: 'about',
    description: 'About command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
