module.exports.run = async (bot, message, args) => {
  let arrArgs = Array.from(args)
  let channelID = arrArgs.slice(0, 1).join(` `)
  let deleteChannel = message.guild.channels.cache.find(item => item.id = channelID)
  await message.channel.send(`канал ${deleteChannel.name} успешно удалён`)
  deleteChannel.delete()
}