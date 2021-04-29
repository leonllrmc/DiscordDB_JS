const Discord = require('discord.js')
const client = new Discord.Client()
const DiscordDB = require('../src/main')

client.on('ready',async (msg) => {
    const guild = client.guilds.cache.get("783967689852715038");
    const channelId = "836844017634377799";
    const DB = new DiscordDB(guild, channelId)

    console.log(await DB.getContent())

    await DB.setContent('{}')
});

client.login("ODM2NjQ4NzA2NjAyMDQxNDI1.YIhD0w.f7_wyvfdVA6267NZjXeBW9fb3" + "e0")
