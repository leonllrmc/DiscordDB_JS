class Discord_DB {
    constructor(channel, client) {
        try {
            if(typeof channel === 'string') {
                let channelFetched = client.channels.cache.get(channel);
                if (!channel) throw new Error("Error While getting channel...");
                this.channel = channelFetched;
            }else {
                this.channel = channel;
            }
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
                resolve(msgs.first().edit(newContentParsed));
            }).catch((err) => {
                reject(err);
            })
        }))
    }
}

class MsgDiscord_DB {
    constructor(message, channel, client) {
        if(typeof channel === 'string') {
            let channelFetched = client.channels.cache.get(channel);
            if (!channel) throw new Error("Error While getting channel...");
            this.channel = channelFetched;
        }else {
            this.channel = channel;
        }
        if(typeof message === 'string') {
            try {
                    var msg = this.channel.messages.cache.get(message);
                    if(!msg) throw new Error('error while getting message');
                    this.msg = msg;
            }catch(e) {
                throw e;
            }
        }else {
            this.msg = message;
        }
    }
    getContent() {
        return new Promise(((resolve, reject) => {
            try {
                resolve(this.msg.content);
            }catch (e) {
                reject(e);
            }
        }))
    }
    setContent(newContent) {
        return new Promise(((resolve, reject) => {
            try {
                if(typeof newContent === 'string') {
                    resolve(this.msg.edit(newContent));
                }else {
                    resolve(this.msg.edit(JSON.stringify(newContent)));
                }
            }catch (e) {
                reject(e);
            }
        }))
    }
}

exports.Discord_DB = Discord_DB;
exports.Discord_DB_fromMessage = MsgDiscord_DB;
