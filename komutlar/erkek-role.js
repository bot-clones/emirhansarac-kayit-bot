const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
  if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`<:no:663378512417128449> Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`); 

  const rol = message.mentions.roles.first()
  
  if (!rol) {
    const hata = new Discord.MessageEmbed()
    .setAuthor('HATA', message.author.avatarURL())
    .setDescription(`Rol belirtmeniz gerekiyor! \n\n**Örnek Kullanım:** \n\`\`\`${prefix}erkek-role @roletiket\`\`\``) 
    .setColor('RED')
              .setFooter(`Gnarge 2020`)
    .setTimestamp()
    return message.channel.send(hata)
      }
      db.set(`erkekRol.${message.guild.id}`, rol.id)
      const embed = new Discord.MessageEmbed()
      .setAuthor(`İşte bu kadar!`, message.author.avatarURL())
      .setDescription(`Kayıt da kullanılacak: ${rol} rolü olarak seçtiniz!`)
      .setTimestamp()
                .setFooter(`Gnarge 2020`)
      .setColor("GREEN")
       return message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['erkekrole','erkekrol','erkek-rol'],
  permLevel: 0
};

exports.help = {
  name: 'erkek-role',
  description: 'Kişi susturulunca verilecek rolü ayarlarsınız.',
  usage: 'mute-rol',
};