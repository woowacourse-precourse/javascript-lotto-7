class InputHandler {
  static lottoArray(lottoNumber) {
    const removeSeperator = lottoNumber
      .split(',')
      .map((string) => Number(string));
    return removeSeperator;
  }
}

export default InputHandler;
