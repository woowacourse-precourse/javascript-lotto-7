// 시도

async function priceValidator(price) {
  try {
    isNumber(price);
    isUnitOfPrice(price);
    minprice(price);
    maxprice(price);

    getLottoCount(price);
  } catch (error) {
    Console.print(error.message);
    return getPriceInput();
  }
}

async function WinningNumberValidator(winningNumber) {
  try {
    winningNumber = winningNumber.split(",");

    CheckWinningNumberInput(winningNumber);
    isWinningNumberLength(winningNumber);
    checkNumberRange(winningNumber);
    isDuplicateNumber(winningNumber);
  } catch (erro) {
    Console.print(error.message);
    return getWinningNumber();
  }
}

async function bonusNumberValidator(bonusNumber) {
  try {
    bonusNumber = bonusNumber.trim();

    isNumber(bonusNumber);
    checkNUmberRange(bonusNumber);
    isDuplicateBonusNumber(bonusNumber);
  } catch (erro) {
    Console.print(erro.message);
    return getBonusNumber();
  }
}
