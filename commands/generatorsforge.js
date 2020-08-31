const Discord = require('discord.js');

const forge1122 = new Discord.MessageEmbed()
    .setTitle('MCreator 1.12.2 Forge Generator')
    .setURL('https://mcreator.net/plugin/64513/minecraft-1122-generator')
    .setColor(0xffffff)
    .setThumbnail('https://mcreator.net/sites/default/files/styles/thumbnail/public/2020-07/forge.png?itok=9magLP49')
    .addField('Authors', 'Pylo, KlemenDEV')
    .addField('License', '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)')
    .addField('Forum', '[MCreator Forum Topic](https://mcreator.net/forum/62695/generator-minecraft-1122-versions-20203)')
    .addField('Issue Tracker', '[GitHub Issues](https://github.com/Pylo/MCreatorGenerator-Forge-1.12.2/issues)')
    .addField('Releases', '[GitHub Releases](https://github.com/Pylo/MCreatorGenerator-Forge-1.12.2/releases)')
    .addField('Source Code', '[GitHub Repository](https://github.com/Pylo/MCreatorGenerator-Forge-1.12.2)')
    ;

module.exports = {
    name: 'forge',
    description: 'Forge Generator command.',
    execute(message, args){
      if(args[0] === '1.12.2') {
        message.channel.send(forge1122);
      } else {
        message.channel.send('Usage: mc!forge <mc-version>')
      }
    }
}
