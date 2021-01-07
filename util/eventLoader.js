
const emirhan = (event) => require(`../ek/${event}`);
module.exports = client => {
  client.on('ready', () => emirhan('ready')(client));
  client.on('message', emirhan('message'));
};//EMİRHANSARAÇ TARAFINDANYAPILMIŞTIR
