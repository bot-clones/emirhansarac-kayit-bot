const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
            if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  

  const kanal = message.mentions.channels.first()
  
  if (!kanal)  {
    const hata = new Discord.MessageEmbed()
    .setAuthor('HATA', message.author.avatarURL())
    .setDescription(`Kanal belirtmeniz gerekiyor! \n\n**Örnek Kullanım:** \n\`\`\`${prefix}kanal-log #kanal\`\`\``) 
    .setColor('RED')
              .setFooter(`Gnarge 2020`)
    .setTimestamp()
    return message.channel.send(hata)
      }
      db.set(`kayıtKanal.${message.guild.id}`, kanal.id)
      const embed = new Discord.MessageEmbed()
      .setAuthor(`Mükemmel!`, message.author.avatarURL())
      .setDescription(`Kayıt mesaj sisteminde ki kanal başarıyla ${kanal} olarak seçildi!`)
.setTimestamp()
                .setFooter(`Gnarge 2020`)
.setColor("GREEN")
  message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kanallog','kanalayarla','kanal-ayarla','kayıt-log'],
  permLevel: 0
};

exports.help = {
  name: 'kanal-log',
  description: 'Kayıt yetkili rolünü ayarlar.',
  usage: 'kayıt-yetkilisi-ayarla',
};