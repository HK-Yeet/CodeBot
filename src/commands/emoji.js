const { MessageEmbed } = require("discord.js");

module.exports = {
  callback: ({ client, message, text }) => {
    let emoji = message.guild.emojis.cache.find(emoji => emoji.name === text)
    if(!emoji) return message.reply("Could not find that emoji.")
    if (emoji.animated === true) {
      let embed = new MessageEmbed()
        .setTitle(`${emoji.name}`)
        .setThumbnail(`${emoji.url}`)
        .setDescription("```<a:" + emoji.name +":"+ emoji.id +">```")
      message.channel.send({ embeds: [embed] });
    } else {
      let embed = new MessageEmbed()
        .setTitle(`${emoji.name}`)
        .setThumbnail(`${emoji.url}`)
        .setDescription("```<" + emoji.name +":"+ emoji.id +">```")
      message.channel.send({ embeds: [embed] });
    }
  },
};
