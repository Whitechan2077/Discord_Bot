const Discord = require('discord.js');

const client = new Discord.Client({ 
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.MANAGE_MESSAGES,
    // Thêm các quyền khác tương tự tại đây
  ]
});

const prefix = '/'; // Tiền tố cho các lệnh bot

client.on('ready', () => {
  console.log(`Bot đã sẵn sàng với tên ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.content.startsWith(prefix) && !message.author.bot) {
    console.log('nhắn cái địt cụ')
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command == 'hello') {
      message.channel.send('Lô cái địt mẹ mày');
    } else if (command == 'bulon') {
      message.channel.send('Them bu lon qua');
    } else if (command == 'Say something') {
      const text = args.join('Bú lồn đi em');
      message.channel.send(text);
    }
  }
});
client.login('NzI4ODE5MjIyMzc3MDA1MDg2.GaHtNA.MZsys1F_wv1bPnzIeXeW2V4DjGNYs6EFiR0OmI');
