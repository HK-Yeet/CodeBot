const { MessageEmbed } = require("discord.js");

module.exports = {
  callback: ({ client, message, instance }) => {
    let commands = [];
    instance.commandHandler.commands.forEach((command) => {
      commands.push(command.names[0]);
    });
    let embed = new MessageEmbed().setDescription(
      `**${client.user.username}**'s commands:\n${commands.join(", ")}`
    );
    message.channel.send({ embeds: [embed] });
  },
};
