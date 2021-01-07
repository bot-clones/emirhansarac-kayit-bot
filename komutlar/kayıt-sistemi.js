const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
    const ayarlar = require('../ayarlar.json')
    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Sunucu Kayıt Sistemi`, message.author.avatarURL())
    .setDescription(`:white_small_square: - \`${prefix}erkek-role [@roletiket]\` - \`${prefix}erkek-role-kapat\` 
Sunucuda kayıt edebilmeniz için erkek rolü belirlemelisiniz.

    :white_small_square: - \`${prefix}kadın-role [@roletiket]\` -  \`${prefix}kadın-role-kapat\` 
    Sunucuda kayıt edebilmeniz için kadın rolü belirlemelisiniz.

    :white_small_square: - \`${prefix}yetkili-role [@roletiket]\` -  \`${prefix}yetkili-role-kapat\` 
Kullanıcıları kayıt edebilecek bir yetkili rolü belirtmelisiniz.

:white_small_square: - \`${prefix}kayıtsız-role [@roletiket]\` -  \`${prefix}kayıtsız-role-kapat\` 
Sunucuya katılınca verilecek kayıtsız rolünü ayarlamanız gerekmektedir.

:white_small_square: - \`${prefix}sunucu-kayıt-log [#kanaletiket]\` -  \`${prefix}sunucu-kayıt-log-kapat\` 
Sunucuya katılınca verilecek kayıtsız rolünü ayarlamanız gerekmektedir.

:white_small_square: - \`${prefix}admin-istatistik [@kullanıcı]\`
Bu komutla yetkililerin kaç erkek, kaç kadın kullanıcı kaydettiğini görürsünüz.

\`\`\`Nasıl Kullanılır?\`\`\`
**\`${prefix}erkek @kullanıcı\`**, **\`${prefix}kadın @kullanıcı\`**

:white_small_square: - **Örnek Erkek komut kullanım:** \`${prefix}erkek @etiket\`
:white_small_square: - **Örnek Kadın komut kullanım:** \`${prefix}kadın @etiket\`
  
`)
.setFooter(`${message.author.tag} Tarafından istendi!`,  message.author.avatarURL)
.setThumbnail(message.author.avatarURL())
.setColor('#F3EF0B')
    .setTimestamp()
    return message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,  
  aliases: ['sunucukayıtsistem','sunucukayıtsistemi','sunucu-kayıt'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'Sadece etiket ile (Erkek - Kadın) kayıt sistem',
  usage: 'sunucu-kayıt-sistemi',
  type: 'Moderasyon'
};
