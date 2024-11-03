import { Console } from "@woowacourse/mission-utils";

const price = await Console.readLineAsync(LOG_MESSAGE.START_MESSAGE);
// price = '8000'
const winningNumber = await Console.readLineAsync(
  LOG_MESSAGE.WINNING_NUMBER_MESSAGE
);
// winningNuber = '1,2,3,4,5,6'
const bonusNumber = await Console.readLineAsync(
  LOG_MESSAGE.BONUS_NUMBER_MESSGE
);
// bonusNumber = '7'

// 시도

async function priceValidator() {
  try {
    const price = await Console.readLineAsync(LOG_MESSAGE.START_MESSAGE);

    isNumber(price);
    isUnitOfPrice(price);
    minprice(price);
    maxprice(price);

    getLottoCount(price);
  } catch (error) {
    Console.print(error.message);
    return priceValidator();
  }
}
