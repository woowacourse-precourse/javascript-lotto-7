class Validator {
  static checkIsNull(userInput) {
    if (!userInput || !userInput.trim())
      throw new Error('[ERROR] 입력값이 비어 있습니다. 값을 입력해 주세요.');
  }
}

export default Validator;
