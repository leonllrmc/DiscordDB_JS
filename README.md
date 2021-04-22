# DiscordDB_JS

A portage from [DiscordDB](https://github.com/weibeu/DiscordDB) for javascript

### Installation
To install current latest release you can use following command:
```sh
npm install DiscordDB (not ready yet... )
```


### Basic Documentation
```javascript
  new DB(guild/*guild object*/, channelId)
  
  DB.getContent().then(content).catch(err)
  
  DB.setContent(newContent/*JSON or Object*/).then().catch(err)
```


### Requirements
* discord.js

