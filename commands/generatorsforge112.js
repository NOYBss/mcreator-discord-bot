const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator 1.12.2 Forge Generator')
    .setURL('https://mcreator.net/plugin/64513/minecraft-1122-generator')
    .setColor(0xffffff)
    .setThumbnail('https://mcreator.net/sites/default/files/styles/thumbnail/public/2020-07/forge.png?itok=9magLP49')
    .addField('Authors', 'Pylo, KlemenDEV')
    .addField('License', '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)')
    .addField('Issue Tracker', '[GitHub Issues](https://github.com/Pylo/MCreatorGenerator-Forge-1.12.2/issues)')
    .addField('Releases', '[GitHub Releases](https://github.com/Pylo/MCreatorGenerator-Forge-1.12.2/releases)')
    .addField('Source Code', '[GitHub Repository](https://github.com/Pylo/MCreatorGenerator-Forge-1.12.2)')
    ;

module.exports = {
    name: 'forge112',
    description: '1.12.2 Forge Generator command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
