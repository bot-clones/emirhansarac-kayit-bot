const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
      let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

      if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('Sadece herhangi bir sunucudan mesaj gönderebilirim.:relaxed: ')
    return message.author.sendEmbed(ozelmesajuyari); }

  if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`<:no:663378512417128449> Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`); 

   let rol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  let newRole;
  let tworole;
  if (!rol) {
    const hata = new Discord.MessageEmbed()
    .setAuthor('HATA', message.author.avatarURL)
    .setDescription(`Rol belirtmeniz gerekiyor! \n\n**Örnek Kullanım:** \n\`\`\`${prefix}kayıtsız-rol @roletiket\`\`\``) 
    .setColor('RED')
    .setTimestamp()
    return message.channel.send(hata)
      }
  else newRole = message.mentions.roles.first().id
  let isim = message.mentions.roles.first().name  
    db.set(`kayıtisim.${message.guild.id}`, isim)
  let otorol = await db.set(`kayıtsızRol.${message.guild.id}`, newRole)
  if (!message.guild.roles.cache.get(newRole)) {
    const hata = new Discord.MessageEmbed()
    .setAuthor('HATA', message.author.avatarURL())
    .setDescription(`Etiketlediğiniz rol bulunamadı, etiketlediğiniz rolün etiketlenebilirliğinin aktif olduğundan emin olunuz`) 
    .setColor('RED')
    .setTimestamp()
    return message.channel.send(hata)
      } 
const embed = new Discord.MessageEmbed()
.setAuthor(`İşte bu kadar!`, message.author.avatarURL())
.setDescription(`Kayıt da kullanılacak: <@&${newRole}> rolü olarak seçtiniz!`)
.setTimestamp()
.setColor("GREEN")
 return message.channel.send(embed)

};
  
  
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kayıtsızrol','kayıtsızrole','kayıtsız-rol'],
    permLevel: 0
}

exports.help = {
    name: 'kayıtsız-role',
    description: 'Kayıtsız rolü ayarlanır.',
    usage: 'kayıtsız-rol'
}
