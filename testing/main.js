
const Discord = require('discord.js')
const Discord_DB = require('../src/main.js')
const client = new Discord.client()

const DB = new Discord_DB('', '')
(async () => {
   const content = await DB.getContent() 
   console.log(content)
   await DB.setContent("{}")
})

client.login() 
