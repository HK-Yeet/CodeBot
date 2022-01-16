require("dotenv").config();

const Discord = require('discord.js');
const WOKCommands = require("wokcommands");
const path = require("path");
const chalk = require("chalk");
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
    allowedMentions: {
        repliedUser: false,
    }
});

client.on("ready", () => {
  console.log(chalk.green(`Logged in as ${client.user.tag}`))
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    showWarns: false,
    botOwners: ["788927424166756363"],
    disabledDefaultCommands: [
      "command",
      "language",
      "prefix",
      "requiredrole",
      "channelonly",
      "slash"
    ]
  });
});

client.login(process.env.TOKEN);