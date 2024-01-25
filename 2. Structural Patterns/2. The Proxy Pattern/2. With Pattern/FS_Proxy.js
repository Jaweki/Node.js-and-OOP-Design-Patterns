// Be aware, that proxies should represent all methods of the object that it wraps around.
// Meaning that, the proxy should have the same interface as its subject.
// Example: the fs module, has methods like appendFile, writeFile, writeFileSync, existSync
// The FS_Proxy, should also implement this methods to provide a safe interface.

class FS_Proxy {
    
    constructor(fs_subject) {
        this.fs = fs_subject;
    }

    readFile(path, format, callback) {
        if (!path.match(/.md$/i)) {
            return callback(new Error(`Can only read Markdown files.`));
        }

        this.fs.readFile(path, format, callback);
    }


}

module.exports = FS_Proxy;