import { Console } from '@woowacourse/mission-utils';

const getPurchasePriceInput = async () => {
  const purchasePrice = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  return purchasePrice;
};

const getWinningNumbersInput = async () => {
  const winningNumbers = await Console.readLineAsync('당첨번호를 입력해 주세요.\n');
  return winningNumbers;
};

export { getPurchasePriceInput, getWinningNumbersInput };
