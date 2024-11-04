import { Console } from '@woowacourse/mission-utils';
import { splitBySeperator } from './index.js';
import { SEPERATOR } from '../constants/index.js';

const getPurchaseAmount = async (validator) => {
  const purchaseAmount =
    await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  validator.validatePurchaseAmount(purchaseAmount);
  return purchaseAmount;
};

const getWinningNumbers = async (validator) => {
  const winningNumbersString = await Console.readLineAsync(
    '\n당첨 번호를 입력해 주세요.\n',
  );
  validator.validateWinningNumberString(winningNumbersString);
  const winningNumbers = splitBySeperator(SEPERATOR, winningNumbersString);
  validator.validateWinningNumbers(winningNumbers);
  return winningNumbers;
};

const getBonusNumber = async (winningNumber, validator) => {
  const bonusNumber = await Console.readLineAsync(
    '\n보너스 번호를 입력해 주세요.\n',
  );
  validator.validateBonusNumber(winningNumber, bonusNumber);
  return bonusNumber;
};

const printLottoNumbers = (purchaseQuantity, lottoNumbers) => {
  Console.print(`\n${purchaseQuantity}개를 구매했습니다.`);
  lottoNumbers.forEach((lottoNumber) => {
    const lottoString = `[${lottoNumber.join(', ')}]`;
    Console.print(lottoString);
  });
};

const printResult = (record, yieldRate) => {
  Console.print('\n당첨 통계\n---');
  record.forEach((table) => {
    const { matchingCount } = table.condition;
    let output = `${matchingCount}개 일치`;
    if ('isWinningBonus' in table.condition) {
      if (table.condition.isWinningBonus) {
        output += ', 보너스 볼 일치';
      }
    }
    output += ` (${table.price}원) - ${table.count}개`;
    Console.print(output);
  });
  Console.print(`총 수익률은 ${yieldRate}%입니다.`);
};
export {
  getPurchaseAmount,
  getWinningNumbers,
  getBonusNumber,
  printLottoNumbers,
  printResult,
};
