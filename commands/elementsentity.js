const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('How to Make a Mob/Entity')
    .setURL('https://mcreator.net/wiki/how-make-mob')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .setDescription('Living entity is entity with movement, AI tasks, health, ...');

module.exports = {
    name: 'entity',
    description: 'Entity command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
