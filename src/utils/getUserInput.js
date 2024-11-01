import { Console } from '@woowacourse/mission-utils';

async function getPurchaseAmount() {
  return await Console.readLineAsync('구입금액을 입력해 주세요.');
}

// 로또 당첨 번호
async function getWinningNumbers() {
  return await Console.readLineAsync('당첨 번호를 입력해 주세요.');
}

// 보너스 번호
async function getBonusNumber() {
  return await Console.readLineAsync('보너스 번호를 입력해 주세요.');
}

export { getPurchaseAmount, getWinningNumbers, getBonusNumber };
