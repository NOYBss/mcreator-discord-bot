const Discord = require('discord.js');

module.exports = {
    name: 'invalid',
    description: 'Invalid command.',
    execute(message, args){
        message.channel.send('**Invalid Command -** Use __*mc!help*__ to get a list of commands.');
    }
}
