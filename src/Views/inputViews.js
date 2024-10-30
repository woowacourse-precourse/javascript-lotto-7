import { Console } from '@woowacourse/mission-utils';

const getPurchasePriceInput = async () => {
  const purchasePrice = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  return purchasePrice;
};

const getWinningNumbersInput = async () => {
  const winningNumbers = await Console.readLineAsync('당첨번호를 입력해 주세요.\n');
  return winningNumbers;
};

const getBonusNumberInput = async () => {
  const bonusNumber = await Console.readLineAsync('\n보너스번호를 입력해 주세요.\n');
  return bonusNumber;
};

export { getPurchasePriceInput, getWinningNumbersInput, getBonusNumberInput };
