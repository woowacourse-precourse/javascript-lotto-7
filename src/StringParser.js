import { DELERIMETER } from './constant.js';

/**
 *
 */
class StringParser {
  #delemiter;

  constructor() {
    this.#delemiter = DELERIMETER;
  }

  /**
   *
   */
  parseString(string) {
    return string.split(this.#delemiter);
  }
}

export default StringParser;
