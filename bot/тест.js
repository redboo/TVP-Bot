module.exports.run = async (bot, message, args) => {
  if (message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send(`Вы обладаете правами администратора`)
  } else {
    message.channel.send(`У вас нет прав администратора`)
  }
}