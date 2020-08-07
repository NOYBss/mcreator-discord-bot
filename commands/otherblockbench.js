const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('BlockBench')
    .setURL('https://blockbench.net/')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .addField('What is BlockBench?', 'BlockBench is a 3D Model Editor made for creating and editting assets of Minecraft.')
    .addField('Download BlockBench', '[BlockBench Download Page](https://blockbench.net/downloads/)')
    .addField('Common BlockBench Model Issues', '[MCreator Wiki Page](https://mcreator.net/wiki/common-blockbench-issues-mcreator)')
    ;

module.exports = {
    name: 'blockbench',
    description: 'BlockBench command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
