///당첨번호 유효성
function CheckWinningNumberInput() {
  if (!/^[0-9]+(,\s*[0-9]+)*$/.test(winningNumber)) {
    throw new Error(NUMBER_INPUT_ERROR_MESSAGE.ONLY_NUMBER_COMMA);
  }
}

function isWinningNumberLength() {
  const MAX_WINNING_NUMBER_LENGTH = 6;
  if (winningNumber.length !== MAX_WINNING_NUMBER_LENGTH) {
    throw new Error(NUMBER_INPUT_ERROR_MESSAGE.INCORRECT_NUMBER_COUNT);
  }
}

function checkNumberRange() {
  // 보너스 번호, 당첨 번호 범위도 여기서 함
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 45;
  if (winningNumber < MIN_NUMBER || MAX_NUMBER < winningNumber) {
    throw new Error(NUMBER_INPUT_ERROR_MESSAGE.NUMBER_RANGE);
  }
}

function isDuplicateNumber() {
  checkduplicate = new set(winningNumber);
  if (checkduplicate.size !== winningNumber.length) {
    throw new Error(NUMBER_INPUT_ERROR_MESSAGE.DUPLICATE_NUMBER);
  }
}

// 보너스 번호 유효성 검사
function isDuplicateBonusNumber() {
  if (winningNumber.includes(bonusNumber)) {
    throw new Error(NUMBER_INPUT_ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
  }
}
