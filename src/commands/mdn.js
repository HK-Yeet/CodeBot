const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  category: "Code Help",
  description: "Searches the MDN documentation",
  minArgs: 1,
  expectedArgs: "<Search Query>",
  callback: async ({ channel, text }) => {
    const uri = `https://developer.mozilla.org/api/v1/search?q=${encodeURIComponent(
      text
    )}&locale=en-US`;

    axios(uri)
      .then(({ data: { documents } }) => {
        const base = `https://developer.mozilla.org`;

        const embed = new MessageEmbed()
          .setAuthor(
            {
              name: `MDN Documentation`,
              iconURL: "https://avatars.githubusercontent.com/u/7565578?s=200&v=4"
            })
          .setColor(0x2296f3);

        for (let i = 0; i < documents.length; i++) {
          if (i === 5) break;
          let { mdn_url, title, summary } = documents[i];
          embed.addField(title, `${summary}\n[**Link**](${base}${mdn_url})`);

        }

        channel.send({ embeds: [embed] });
      })
      .catch((err) => {
        console.error(err);
        channel.send("Could not find that documentation.");
      });
  }
};
