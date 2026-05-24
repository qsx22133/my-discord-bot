const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

// 1. تشغيل موقع مصغر عشان Vercel ما يطفي البوت
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Your Bot is Ready and Running 24/7!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 2. كود بوت الديسكورد مالك
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// الرد على الرسائل (تقدر تبدله بكودك القديم بأي وقت)
client.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.reply('pong!');
  }
});

// تشغيل البوت باستخدام التوكن المحفوظ بأمان
client.login(process.env.TOKEN);
