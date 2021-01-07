const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
/*
!!
EMİRHAN SARAÇ TARAFINDAN YAPILIP PAYLAŞILMIŞTIR!
YOUTUBE: EMİRHAN SARAÇ
!!
*/


  const user = message.mentions.users.first() || message.author;
  if (!user)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Hata :x:")
        .setDescription("Lütfen birisini etiketle!")
    );
/*
!!
EMİRHAN SARAÇ TARAFINDAN YAPILIP PAYLAŞILMIŞTIR!
YOUTUBE: EMİRHAN SARAÇ
!!
*/


  let erkek = db.get(`erkekpuan_${message.guild.id}_${user.id}`);
  let kız = db.get(`kadınpuan_${message.guild.id}_${user.id}`);

  message.channel.send(`${user} Adlı Kullanıcı Bu Sunucuda: \n\n**Toplam \`  ${kız || "0"}  \` Kadın Kaydetmiş!** \n**Toplam \`  ${erkek || "0"}  \`  Erkek Kaydetmiş!**`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ['kullanıcıistatistik','kullanıcı-istatistik','administatistik']
};

exports.help = {
  name: "admin-istatistik",
description: "Yetkililer hakkında bilgi verir.",
type: "Yapılandırma"
};
/*
!!
EMİRHAN SARAÇ TARAFINDAN YAPILIP PAYLAŞILMIŞTIR!
!!
*/
