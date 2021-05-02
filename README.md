# DiscordDB_JS

A portage from [DiscordDB](https://github.com/weibeu/DiscordDB) for javascript (but with more things...)

### Installation
To install current latest release you can use followings commands:
```sh
npm install discord_db_js
#or
npm i discord_db_js
```


### Basic Documentation
```javascript
  new Discord_DB(channel /*channel object or channel Id*/, client /*Discord.js client*/)
  new Discord_DB_fromMessage(message/*message object or message Id*/,channel /*channel object or channel Id*/, client /*Discord.js client*/)
  
  DB.getContent().then(content).catch(err)

  DB.setContent(newContent/*JSON or Object*/).then().catch(err)
```

###Breaking changes
you now have to use <br>
```javascript
const {Discord_DB, Discord_DB_fromMessage} = require('discord_db_js')
```
instead of
```javascript
const Discord_DB = require('discord_db_js')
```

and now `Discord_DB` constructor no longer take a guild argument but only a channel argument and client argument

### Requirements
* discord.js
