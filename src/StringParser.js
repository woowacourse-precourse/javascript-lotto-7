import { DELIMITER } from './constant.js';

/**
 *
 */
class StringParser {
  #delimiter;

  constructor() {
    this.#delimiter = DELIMITER;
  }

  /**
   *
   */
  parseString(string) {
    return string.split(this.#delimiter);
  }
}

export default StringParser;
