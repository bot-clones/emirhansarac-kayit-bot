const emirhan = require('discord.js');
const sarac = require('quick.db')
const codare = require("ms");

exports.run = async(client, message, args) => {
              const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  let mutel = await sarac.fetch(`erkekRol.${message.guild.id}`);
  let yetkili = await sarac.fetch(`yetkiliRol.${message.guild.id}`);
  let kayitsiz = await sarac.fetch(`kayıtsızRol.${message.guild.id}`);
  let modlog = await sarac.fetch(`sunucuKayıtLog.${message.guild.id}`);

  if (!yetkili) return
  if (!mutel) return
  if(!message.member.roles.cache.has(yetkili)) {
    const hata = new emirhan.MessageEmbed()
    .setAuthor('HATA', message.author.avatarURL())
    .setDescription(`Bu komut için yetersiz izniniz bulunuyor! Yetkili rolüne sahip olmalısınız!`) 
    .setColor('RED')
          .setFooter(`Gnarge 2020`)
    .setTimestamp()
    return message.channel.send(hata)
      }

    let kisi = message.mentions.members.first()
        if(!kisi)  {
          const hata = new emirhan.MessageEmbed()
          .setAuthor('HATA', message.author.avatarURL())
          .setDescription(`Lütfen bir kullanıcıyı etiketleyin!\n\n**Örnek Kullanım:** \n\`\`\`${prefix}erkek @kullanıcı\`\`\` `) 
          .setColor('RED')
                .setFooter(`Gnarge 2020`)
          .setTimestamp()
          return message.channel.send(hata)
            }


    if (kisi.id === message.author.id) { 
      const hata = new emirhan.MessageEmbed()
      .setAuthor('HATA', message.author.avatarURL())
      .setDescription(`Kendinizi kayıt edemezsiniz!`) 
      .setColor('RED')
      .setFooter(`Gnarge 2020`)
      .setTimestamp()
      return message.channel.send(hata)
        }
    if (!kisi.voice.channel || kisi.voice.channelID === null || kisi.voice.channelID === NaN || kisi.voice.channelID === undefined) 
return message.reply(`Etiketlediğin Kullanıcı Ses Kanalına Bağlı Değil.`).catch(console.error)

        const embed22 = new emirhan.MessageEmbed()
        .setTitle(`Sen Harikasın!`)
  .setDescription(`**Kayıt Edilen Kullanıcı** ${kisi}  \n**Kayıt İşleminde Verilen Rol** <@&${mutel}>`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username} - Gnarge 2020`)  
  .setThumbnail(client.user.avatarURL())
  .setColor("GREEN")
  message.channel.send(embed22)
  
    kisi.roles.add(mutel).then(y => y.roles.remove(kayitsiz))

    const yar = new emirhan.MessageEmbed()
    .setTitle(`Sunucu Kayıt Log`)
.setDescription(`
**Kayıt Edilen Kullanıcı:** ${kisi}
**Kullanıcıyı Kayıt Eden Kullanıcı**:  <@!${message.author.id}>
`)
.setColor("#F1F10D")
.setTimestamp()
    .setFooter(`Gnarge 2020`)
.setThumbnail(client.user.avatarURL())
client.channels.cache.get(modlog).send(yar)
  sarac.set(`muteee.${kisi.id}`, 'var')     
  sarac.add(`erkekpuan_${message.guild.id}_${message.author.id}`, 1);

    
  
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['erkek','man','male'],
  permLevel: 0
};

exports.help = {
  name: 'teyit-erkek',
  description: 'Erkek rolü verirsiniz.',
  usage: 'erkek',
};