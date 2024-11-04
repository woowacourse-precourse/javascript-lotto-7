import { throwError } from '../utils/index.js';

class InputParser {
  async readLoop() {
    throwError('readLoop 메서드를 오버라이드해야 합니다.');
  }

  #read() {
    throwError('#read 메서드를 오버라이드해야 합니다.');
  }

  #validate() {
    throwError('#validate 메서드를 오버라이드해야 합니다.');
  }
}

export default InputParser;
