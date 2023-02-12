const Block = require('./block');

const block = new Block('1234', '123456SDFGH33RF', 'ASDFDGFHERTE3456', '100');
console.log(block.toString());

console.log(Block.genesis().toString());
const firstBlock = Block.mineBlock(Block.genesis(), '$500');

console.log(firstBlock.toString());