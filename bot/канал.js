module.exports.run = async (bot, message, args) => {
  let arrArgs = Array.from(args)
  let channelName = arrArgs.slice(0, 1).join(` `)
  let channelTypes = arrArgs.slice(1, 2).join(` `)
  function createChannel() {
    message.guild.channels.create(channelName, channelTypes)
  }
  await createChannel()
  let newChannel = message.guild.channels.cache.find(item => item.name = channelName)
  message.channel.send(`Канал создан id: ${newChannel.id}`)
}