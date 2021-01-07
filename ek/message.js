const ayarlar = require('../ayarlar.json');
let talkedRecently = new Set();
module.exports = message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR

  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  //EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }
//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR

};//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR