const Discord = require('discord.js');

const embed = new Discord.MessageEmbed()
    .setTitle('MCreator')
    .setURL('https://www.mcreator.net')
    .setColor(0xffffff)
    .setDescription('MCreator Bot Commands - Elements')
    .setFooter(
      'Mod Elements\n' +
      'mc!achievement - How to Make an Advancement/Achievement\n' +
      'mc!armor - How to Make a Armor\n' +
      'mc!biome - How to Make a Biome\n' +
      'mc!block - How to Make a Block\n' +
      'mc!command - How to Make a Command\n' +
      'mc!creativetab - How to Make a Creative Tab\n' +
      'mc!dimension - How to Make a Dimension\n' +
      'mc!enchantment - How to Make a Enchantment\n' +
      'mc!entity - How to Make a Mob/Entity\n' +
      'mc!fluid - How to Make a Fluid\n' +
      'mc!food - How to Make a Food\n' +
      'mc!fuel - How to Make a Fuel\n' +
      'mc!function - How to Make a Function\n' +
      'mc!gui - GUI Editor\n' +
      'mc!item - How to Make a Item\n' +
      'mc!loottable - How to Make a Loot Table\n' +
      'mc!musicdisc - How to Make a Music Disc\n' +
      'mc!plant - How to Make a Plant\n' +
      'mc!potion - How to Make a Potion\n' +
      'mc!procedure - Procedure System\n' +
      'mc!rangeditem - How to Make a Ranged Item\n' +
      'mc!recipe - How to Make a Recipe\n' +
      'mc!structure - How to Make a Structure\n' +
      'mc!tag - How to Make a Tag\n' +
      'mc!tool - How to Make a Tool\n'
    );

module.exports = {
    name: 'elements',
    description: 'Help about MCreator Mod Elements.',
    execute(message, args){
        message.channel.send(embed);
    }
}
