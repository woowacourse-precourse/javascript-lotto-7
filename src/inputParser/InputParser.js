class InputParser {
  async readLoop() {
    throw new Error('readLoop 메서드를 오버라이드해야 합니다.');
  }

  #read() {
    throw new Error('#read 메서드를 오버라이드해야 합니다.');
  }

  #validate() {
    throw new Error('#validate 메서드를 오버라이드해야 합니다.');
  }
}

export default InputParser;
