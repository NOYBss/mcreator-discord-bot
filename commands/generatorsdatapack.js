const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator 1.16.2 Data Pack Generator')
    .setURL('https://mcreator.net/plugin/66040/1162-data-pack-generator')
    .setColor(0xffffff)
    .setThumbnail('https://mcreator.net/sites/default/files/styles/thumbnail/public/2020-08/datapack.png?itok=8kmS5F6r')
    .addField('Authors', 'Goldorion')
    .addField('License', '[GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0.en.html)')
    .addField('Forum', '[MCreator Forum Topic](https://mcreator.net/forum/66042/1162-data-pack-generator)')
    .addField('Issue Tracker', '[GitHub Issues](https://github.com/Goldorion/MCreator-1.16.2-Datapack-Generator/issues)')
    .addField('Releases', '[GitHub Releases](https://github.com/Goldorion/MCreator-1.16.2-Datapack-Generator/releases)')
    .addField('Source Code', '[GitHub Repository](https://github.com/Goldorion/MCreator-1.16.2-Datapack-Generator)')
    ;

module.exports = {
    name: 'datapack',
    description: 'Data Pack Generator command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
