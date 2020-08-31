const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator Spigot Generator')
    .setURL('https://mcreator.net/plugin/64516/mcreator-spigot-generator')
    .setColor(0xffffff)
    .setThumbnail('https://mcreator.net/sites/default/files/styles/thumbnail/public/2020-07/type-spigot.png?itok=BXjvo4T4')
    .addField('Authors', 'Goldorion')
    .addField('License', '[GNU Lesser General Public License v2.1](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)')
    .addField('Forum', '[MCreator Forum Topic](https://mcreator.net/forum/64143/spigot-generator-plugin)')
    .addField('Issue Tracker', '[GitHub Issues](https://github.com/ClothCreators/MCreatorSpigotGenerator/issues)')
    .addField('Releases', '[GitHub Releases](https://github.com/ClothCreators/MCreatorSpigotGenerator/releases)')
    .addField('Source Code', '[GitHub Repository](https://github.com/ClothCreators/MCreatorSpigotGenerator)')
    ;

module.exports = {
    name: 'spigot',
    description: 'Spigot Generator command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
