const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('About MCreator')
    .setURL('https://mcreator.net')
    .setColor(0xffffff)
    .setThumbnail('https://media.discordapp.net/attachments/674675708374679603/738785529856000060/logo-mcreator.jpg')
    .addField('About', 'MCreator is open source software used to make Minecraft Java Edition mods, Bedrock Edition Add-Ons, and data packs using an intuitive easy-to-learn interface or with an integrated code editor. It is used worldwide by Minecraft players, mod developers, for education and by STEM workshops.')
    .addField('License', '[GNU General Public License v3.0](http://www.gnu.org/licenses/gpl-3.0.en.html)')
    .addField('Issue Tracker', '[GitHub Issues](https://github.com/MCreator/MCreator/issues)')
    .addField('Source Code', '[GitHub Repository](https://github.com/MCreator/MCreator)')
    ;

module.exports = {
    name: 'mcreator',
    description: 'MCreator command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
