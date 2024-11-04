function checkEmpty(input) {
  const trimedInput = input.trim();
  if (trimedInput === '') {
    throw new Error('[ERROR] 입력값에 빈칸이 존재합니다.')
  }
}

function checkEmptyArguments(inputs) {
  inputs.forEach((input) => checkEmpty(input));
}

export { checkEmpty, checkEmptyArguments };