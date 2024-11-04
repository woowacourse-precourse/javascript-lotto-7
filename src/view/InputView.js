import { Console } from "@woowacourse/mission-utils";

async function getPriceInput() {
  const price = await Console.readLineAsync(LOG_MESSAGE.START_MESSAGE);
  // price = '8000'
  priceValidator(price);
}

async function getWinningNumber() {
  const winningNumber = await Console.readLineAsync(
    LOG_MESSAGE.WINNING_NUMBER_MESSAGE
  );
  // winningNuber = '1,2,3,4,5,6'
  WinningNumberValidator(winningNumber);
}

async function getBonusNumber() {
  const bonusNumber = await Console.readLineAsync(
    LOG_MESSAGE.BONUS_NUMBER_MESSGE
  ); // bonusNumber = '7'
  bonusNumberValidator(bonusNumber);
}
