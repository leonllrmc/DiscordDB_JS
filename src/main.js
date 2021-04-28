/*class DB {
    constructor(guild, channelId) {
        try {
            this.channel = guild.channels.cache.get(channelId);
            if (!this.channel) throw new Error("Error While getting channel...");
        }catch(e) {
            throw e;
        }
    }
    getContent() {
        return new Promise(((resolve, reject) => {
            this.channel.messages.fetch().then((msgs) => {
                try {
                    resolve(JSON.parse(msgs.first().content.toString()));
                }catch(e) {
                    resolve(msgs.first().content.toString());
                }
            }).catch((err) => {
                reject(err);
            })
        }))
    }
    setContent(newContent) {
        return new Promise(((resolve, reject) => {
            if(Array.isArray(newContent)) throw new Error('Invalid content (must be JSON string or object not Array)');
            var newContentParsed;
            if(typeof newContent == 'string') {
                newContentParsed = newContent;
            }else if(typeof newContent == 'object') {
                newContentParsed = JSON.stringify(newContent);
            }else {
                throw new Error(`Invalid content (must be JSON string or object not ${typeof newContent})`);
            }
            this.channel.messages.fetch().then((msgs) => {
                msgs.first().edit(newContentParsed);
                resolve();
            }).catch((err) => {
                reject(err);
            })
        }))
    }
}*/

module.exports = DB;
