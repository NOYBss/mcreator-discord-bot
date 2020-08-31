const Discord = require('discord.js');

const procedure = new Discord.MessageEmbed()
    .setTitle('Procedure System')
    .setURL('https://mcreator.net/wiki/procedure-system')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Procedure is a graphically designed flow of events with optional global triggers.');

const condition = new Discord.MessageEmbed()
    .setTitle('How to Use Conditions')
    .setURL('https://mcreator.net/wiki/how-use-conditions')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Conditions are a new feature under procedures. Check out the wiki page for more info.');

module.exports = {
    name: 'procedure',
    description: 'Procedure command.',
    execute(message, args){
      if(args[0] === 'condition') {
        message.channel.send(condition);
      } else {
        message.channel.send(procedure);
      }
    }
}
