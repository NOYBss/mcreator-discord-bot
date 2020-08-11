const Discord = require('discord.js');

module.exports = {
    name: 'newmc',
    description: 'NewMC command.',
    execute(message, args){
        message.channel.send('MCreator doesn\'t update their generators to new Minecraft versions until forge releases a __stable__ version. If they already released a stable version, MCreator Devs are probably already working on a update. :wink:');
    }
}
