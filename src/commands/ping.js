module.exports = {
    category: 'Testing',
    description: 'Replies with pong', // Required for slash commands
    callback: ({ client, message, interaction }) => {
      message.reply(`This doesn't mean much: ${client.ws.ping}`)
    },
  }