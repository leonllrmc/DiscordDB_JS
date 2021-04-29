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

client.login(Buffer.from("T0RNMk5qUTROekEyTmpBeU1EUXhOREkxLllJaEQwdy5mN193eXZmZFZBNjI2N05aalhlQlc5ZmIzZTA=", 'base64').toString('ascii'))
