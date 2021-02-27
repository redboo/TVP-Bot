const { MessageEmbed } = require(`discord.js`)

module.exports.run = async (bot, message, args) => {
  let embed = new MessageEmbed()
    .setTitle(`Список команд`)
    .setDescription('`1. анкета - подача анкеты (см. #анкета) \n 2. канал - создание канала. Пример: +канал название text \n 3. удалить - удаление канала по его id. Пример: +удалить id \n 4. тест - тест на права администратора.`')
    .setColor(`RANDOM`)
  message.channel.send(embed)
}