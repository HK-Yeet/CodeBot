const axios = require("axios");
module.exports = {
  category: "Code Help",
  description: "Searches the MDN documentation",
  minArgs: 1,
  aliases: ["docs"],
  expectedArgs: "<Search Query>",
  callback: async ({ message, text  }) => {
    const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
      text
    )}`;

    axios
      .get(uri)
      .then((embed) => {
        const { data } = embed;

        if (data && !data.error) {
          message.channel.send({ embeds: [data] });
        } else {
          message.reply('Could not find that documentation');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
};