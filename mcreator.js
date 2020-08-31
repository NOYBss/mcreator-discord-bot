const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('I am MCreator Discord Bot!'));

app.listen(port, () => console.log(`Pinged!`));

//Actual Bot Starts Here\\

const Discord = require('discord.js');

const client = new Discord.Client();
const fs = require('fs');

const prefix = 'mc!';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`)

  client.commands.set(command.name, command)
}

client.once('ready', () => {
  console.log('MCreator Bot is ready to serve!');
  client.user.setActivity('mc!help', { type: 'LISTENING' });
});

//Check if the message starts with the prefix.
client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //Check words after prefix.
  if(command === 'test') {
    if(message.author.id === process.env.AUTHOR) {
      client.commands.get('test').execute(message, args);
    }
  }
  else if(command === 'about') {
    client.commands.get('about').execute(message, args);
  }
  else if(command === 'help') {
    client.commands.get('help').execute(message, args);
  }
  else if(command === 'elements') {
    client.commands.get('elements').execute(message, args);
  }
  else if(command === 'generators') {
    client.commands.get('generators').execute(message, args);
  }
  else if(command === 'other') {
    client.commands.get('other').execute(message, args);
  }
  else if(command === 'achievement') {
    client.commands.get('achievement').execute(message, args);
  }
  else if(command === 'armor') {
    client.commands.get('armor').execute(message, args);
  }
  else if(command === 'biome') {
    client.commands.get('biome').execute(message, args);
  }
  else if(command === 'block') {
    client.commands.get('block').execute(message, args);
  }
  else if(command === 'command') {
    client.commands.get('command').execute(message, args);
  }
  else if(command === 'creativetab') {
    client.commands.get('creativetab').execute(message, args);
  }
  else if(command === 'dimension') {
    client.commands.get('dimension').execute(message, args);
  }
  else if(command === 'enchantment') {
    client.commands.get('enchantment').execute(message, args);
  }
  else if(command === 'entity') {
    client.commands.get('entity').execute(message, args);
  }
  else if(command === 'fluid') {
    client.commands.get('fluid').execute(message, args);
  }
  else if(command === 'food') {
    client.commands.get('food').execute(message, args);
  }
  else if(command === 'fuel') {
    client.commands.get('fuel').execute(message, args);
  }
  else if(command === 'function') {
    client.commands.get('function').execute(message, args);
  }
  else if(command === 'gui') {
    client.commands.get('gui').execute(message, args);
  }
  else if(command === 'item') {
    client.commands.get('item').execute(message, args);
  }
  else if(command === 'loottable') {
    client.commands.get('loottable').execute(message, args);
  }
  else if(command === 'musicdisc') {
    client.commands.get('musicdisc').execute(message, args);
  }
  else if(command === 'plant') {
    client.commands.get('plant').execute(message, args);
  }
  else if(command === 'potion') {
    client.commands.get('potion').execute(message, args);
  }
  else if(command === 'procedure') {
      client.commands.get('procedure').execute(message, args);
  }
  else if(command === 'rangeditem') {
    client.commands.get('rangeditem').execute(message, args);
  }
  else if(command === 'recipe') {
    client.commands.get('recipe').execute(message, args);
  }
  else if(command === 'structure') {
    client.commands.get('structure').execute(message, args);
  }
  else if(command === 'tag') {
    client.commands.get('tag').execute(message, args);
  }
  else if(command === 'tool') {
    client.commands.get('tool').execute(message, args);
  }
  else if(command === 'datapack') {
    client.commands.get('datapack').execute(message, args);
  }
  else if(command === 'fabric') {
    client.commands.get('fabric').execute(message, args);
  }
  else if(command === 'forge') {
    client.commands.get('forge').execute(message, args);
  }
  else if(command === 'spigot') {
    client.commands.get('spigot').execute(message, args);
  }
  else if(command === 'blockbench') {
    client.commands.get('blockbench').execute(message, args);
  }
  else if(command === 'donate') {
    client.commands.get('donate').execute(message, args);
  }
  else if(command === 'forums') {
    client.commands.get('forums').execute(message, args);
  }
  else if(command === 'issues') {
    client.commands.get('issues').execute(message, args);
  }
  else if(command === 'newmc') {
    client.commands.get('newmc').execute(message, args);
  }
  else if(command === 'plugins') {
    client.commands.get('plugins').execute(message, args);
  }
  else if(command === 'tracker') {
    client.commands.get('tracker').execute(message, args);
  }
  else if(command === 'wiki') {
    if(!args.length) {
      message.channel.send('https://mcreator.net/wiki')
    } else {
      message.channel.send('https://mcreator.net/wiki/' + args[0])
    }
  }
  else {
    client.commands.get('invalid').execute(message, args);
  }
});

client.login(process.env.TOKEN);