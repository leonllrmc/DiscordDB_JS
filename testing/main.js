const Discord = require('discord.js')
const client = new Discord.Client()
const {Discord_DB, Discord_DB_fromMessage} = require('../src/main')

client.on('ready',async (msg) => {
    try {
        const channelId = "836844017634377799";
        const DB = new Discord_DB(channelId, client)

        console.log(await DB.getContent())

        await DB.setContent('{}')

        const DBMsg = new Discord_DB_fromMessage('836844018767888425', channelId, client)

        console.log(await DBMsg.getContent())

        await DBMsg.setContent('{}')

        process.exit(0)
    }catch (e) {
        process.exit(1)
    }
});

client.login("ODM2NjQ4NzA2NjAyMDQxNDI1.YIhD0w.f7_wyvfdVA6267NZjXeBW9fb3" + "e0")
