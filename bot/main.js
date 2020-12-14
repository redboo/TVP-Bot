const Discord = require(`discord.js`);
const bot = new Discord.Client();
const fs = require(`promise-fs`);
const prefix = '+';

bot.commands = new Discord.Collection();
loadcommands();
bot.on(`message`, (message) => {
  let arr = message.content.split(` `);
  let args = arr.slice(1);
  let commandName = arr[0].slice(prefix.length);

  let file = bot.commands.get(commandName);
  if (file) file.run(bot, message, args, arr);
});

bot.login(`token`);

bot.on(`ready`, () => {
  console.log(`Ready! ${bot.user.tag}`);
});

async function loadcommands() {
  let dir = await fs.readdir(`commands`, { encoding: `utf8` });
  let files = dir.filter(file => file.endsWith('.js'));

  files.forEach(file => {
    let cmd = require(`./commands/${file}`);
    bot.commands.set(file.split('.')[0], cmd);
  });
  return files.length;
}