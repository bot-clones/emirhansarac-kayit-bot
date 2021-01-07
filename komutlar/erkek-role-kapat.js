const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, params, args) => {
   	          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

                    if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  
                    let özellik = await db.fetch(`erkekRol.${message.guild.id}`);
                    if(!özellik) {
                       const hata = new Discord.MessageEmbed()
                       .setAuthor('HATA', message.author.avatarURL())
                       .setDescription(`Erkek rolü zaten ayarlanmamış bu yüzden kapatamazsın!`) 
                       .setColor('RED')
                             .setFooter(`Gnarge 2020`)
                       .setTimestamp()
                       return message.channel.send(hata)
                         }
    db.delete(`erkekRol.${message.guild.id}`)

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Başarılı!`, message.author.avatarURL())
    .setDescription(`Erkek rolü başarıyla silindi!`)
    .setTimestamp()
          .setFooter(`Gnarge 2020`)
    .setColor("GREEN")
    
     return message.channel.send(embed)
    
};

exports.conf = {
  kategori: 'ayarlar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'isim-erkek-role-kapat',
 description: 'Sayaçı kapatırsınız.',
 usage: 'sayaç'
};