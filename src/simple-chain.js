const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1]) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.slice();
    this.chain = [];
    return res.join('~~');
  }
};

module.exports = {
  chainMaker
};
