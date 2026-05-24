const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// هذا الأمر يشتغل أول ما البوت يشتغل أونلاين
client.once('ready', () => {
    console.log(`✅ البوت شغال الحين باسم: ${client.user.tag}`);
});

// رد تلقائي بسيط للتجربة: إذا كتبت "هلا" يرد عليك "هلا والله وغلا!"
client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === 'هلا') {
        message.reply('هلا والله وغلا! نورت السيرفر يا كابتن 🔥');
    }
});

// توكن البوت (بنعرفه بموقع ريندر عشان الأمان)
client.login(process.env.TOKEN);