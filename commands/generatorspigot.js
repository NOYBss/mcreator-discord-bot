const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator Spigot Generator')
    .setURL('https://mcreator.net/plugin/64512/mcreator-fabric-generator')
    .setColor(0xffffff)
    .setThumbnail('https://mcreator.net/sites/default/files/styles/thumbnail/public/2020-07/type-spigot.png?itok=BXjvo4T4')
    .addField('Authors', 'Goldorion')
    .addField('License', '[GNU Lesser General Public License v2.1](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)')
    .addField('Issue Tracker', '[GitHub Issues](https://github.com/Goldorion/MCreatorSpigotGenerator/issues)')
    .addField('Releases', '[GitHub Releases](https://github.com/Goldorion/MCreatorSpigotGenerator/releases)')
    .addField('Source Code', '[GitHub Repository](https://github.com/Goldorion/MCreatorSpigotGenerator)')
    ;

module.exports = {
    name: 'spigot',
    description: 'Spigot Generator command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
