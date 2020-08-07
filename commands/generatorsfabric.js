const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator Fabric Generator')
    .setURL('https://mcreator.net/plugin/64512/mcreator-fabric-generator')
    .setColor(0xffffff)
    .setThumbnail('https://mcreator.net/sites/default/files/styles/thumbnail/public/2020-07/type-fabric.png?itok=6Z3JYiLs')
    .addField('Authors', 'Goldorion, BoogieMonster1O1, CrispyChips6660')
    .addField('License', '[GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0.en.html)')
    .addField('Issue Tracker', '[GitHub Issues](https://github.com/ClothCreators/MCreatorFabricGenerator/issues)')
    .addField('Releases', '[GitHub Releases](https://github.com/ClothCreators/MCreatorFabricGenerator/releases)')
    .addField('Source Code', '[GitHub Repository](https://github.com/ClothCreators/MCreatorFabricGenerator)')
    ;

module.exports = {
    name: 'fabric',
    description: 'Fabric Generator command.',
    execute(message, args){
        message.channel.send(embed);
    }
}
