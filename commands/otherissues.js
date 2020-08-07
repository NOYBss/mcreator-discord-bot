const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('Gradle setup and build errors')
    .setURL('https://mcreator.net/wiki/section/troubleshooting')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .addField('BlockBench Issues', '[Common BlockBench Issues](https://mcreator.net/wiki/common-blockbench-issues-mcreator)')
    .addField('Gradle Issues', '[Gradle Setup And Build Errors](https://mcreator.net/wiki/gradle-setup-errors)')
    .addField('JSON Broken Texture', '[Custom Model Broken Texture](https://mcreator.net/wiki/my-json-model-renders-broken-texture)')
    .addField('OBJ Broken Texture', '[OBJ Model Texture Issues](https://mcreator.net/wiki/my-obj-model-has-no-textures)')
    ;

module.exports = {
    name: 'issues',
    description: 'Issues command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
