import { Console } from '@woowacourse/mission-utils';

async function getPurchaseAmount() {
  const purchaseAmountInput = await Console.readLineAsync(
    '구입금액을 입력해 주세요.'
  );
  return purchaseAmountInput;
}

// 로또 당첨 번호
async function getWinningNumbers() {
  const winningNumbersInput = await Console.readLineAsync(
    '당첨 번호를 입력해 주세요.'
  );
  return winningNumbersInput;
}

// 보너스 번호
async function getBonusNumber() {
  const bonusNumberInput = await Console.readLineAsync(
    '보너스 번호를 입력해 주세요.'
  );
  return bonusNumberInput;
}

export { getPurchaseAmount, getWinningNumbers, getBonusNumber };
