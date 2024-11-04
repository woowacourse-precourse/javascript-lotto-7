function checkDecimal(userInput) {
  const SPLITED_INPUT = userInput.split('.');

  if(SPLITED_INPUT.length !== 1) {
    throw new Error('[ERROR] 입력값에 소수가 존재 합니다.');
  }
};

export default checkDecimal;