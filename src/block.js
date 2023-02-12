const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timeStamp, lastHash, hash, data) {
        this.timeStamp = timeStamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block = 
                timeStamp = ${this.timeStamp}
                lastHash = ${this.lastHash.substring(0, 10)}
                hash = ${this.hash.substring(0, 10)}
                data = ${this.data}`;
    }

    static genesis() {
        return new this('Genesis time', '-------', '3FDDFJ4323jfg', []);
    }

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = 'todo-hash';

        return new this(timestamp, lastHash, hash, data);
    }

    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

}


//SubString serve para limitar o display dos dados

module.exports = Block;