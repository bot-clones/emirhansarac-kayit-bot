const emirhan = require("discord.js")
const client = new emirhan.Client();
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);


const db = require("quick.db")
 client.on('guildMemberAdd', async (member, guild, message) => {

     let kayıtsız = await db.fetch(`kayıtsızRol.${member.guild.id}`)
     if (!kayıtsız || kayıtsız.toLowerCase() === 'yok') return;
    else {
     try {
            member.roles.add(member.guild.roles.cache.get(kayıtsız))
                          } catch (e) {
     console.log(e)
    }//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR

    }
    
    });

//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
client.on('guildMemberAdd', async (member, guild, message) => {
  var randomMsg = ["az önce kayarak sunucuya girdi!",
   "Pizza getirmişsindir umarım!",
                   //EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
   "Geldi ve bütün dertler bitti..",
   "Geldi ve bize rest çekti..",
                   //EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
   "Herkes seni bekliyordu!",
   "Kanka son maceran nasıldı?",
   "Geldiğine göre artık sohbet edebiliriz. ^^"     
                   //EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
];
var randomMsg_integer = randomMsg[Math.floor((Math.random() * randomMsg.length))]
let user = client.users.cache.get(member.id);
require("moment-duration-format");

const kurulus = new Date().getTime() - user.createdAt.getTime();
const gün = moment.duration(kurulus).format("D")   
var kontrol;
if (kurulus < 604800000) kontrol = 'Şüpheli!'
if (kurulus > 604800000) kontrol = 'Güvenilir!'

moment.locale('tr-TR');
   let yetkili = await db.fetch(`yetkiliRol.${member.guild.id}`)
   let kanal = await db.fetch(`kayıtKanal.${member.guild.id}`)
   if (!yetkili || yetkili.toLowerCase() === 'yok') return;
  else {
   try {
    
    if (!kanal) return 
    let kanale = client.channels.cache.get(kanal)

    kanale.send(`<@${member.user.id}> **${randomMsg_integer}** \nSeninle birlikte \`${member.guild.memberCount}\` kişiyiz! \nKayıt için **isimini** ve **yaşını** yazıp, **ses** teyiti vermen yeterlidir! \n<@&${yetkili}> Ekibimiz sizinle ilgilenecektir! \nHesap Durumu **${moment.utc(member.createdAt).format('LLLL')} - ${kontrol}** `)
   } catch (e) {
   console.log(e)
  }
  }
  
  });

//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR



const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR

client.commands = new emirhan.Collection();
client.aliases = new emirhan.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR


client.login(process.env.TOKEN)
