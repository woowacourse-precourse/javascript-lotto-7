import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    const purchaseAmount = Number(
      await Console.readLineAsync('구입금액을 입력해주세요.\n'),
    );

    if (isNaN(purchaseAmount)) {
      throw new Error('[ERROR] 숫자 이외의 문자는 입력할 수 없습니다.');
    }
    if (purchaseAmount < 1000) {
      throw new Error('[ERROR] 최소 구입금액은 1,000원입니다.');
    }
    if (purchaseAmount > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        '[ERROR] 구입금액은 9,007,199,254,740,000원을 넘어설 수 없습니다.',
      );
    }
    if (purchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.');
    }

    const lottoCount = purchaseAmount / 1000;
    const lottoList = Array.from({ length: lottoCount }, (x) =>
      Random.pickUniqueNumbersInRange(1, 45, 6),
    );
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    for (let lotto of lottoList) {
      lotto.sort((a, b) => a - b);
      Console.print(lotto);
    }

    let winningNumbers =
      await Console.readLineAsync('\n당첨 번호을 입력해주세요.\n');
    if (!winningNumbers.includes(',')) {
      throw new Error('[ERROR] 당첨 번호는 쉼표로 구분하여 입력해주세요.');
    }
    if (winningNumbers[0] === ',' || winningNumbers.at(-1) === ',') {
      throw new Error('[ERROR] 쉼표가 올바르지 않은 위치에 있습니다.');
    }
    winningNumbers = winningNumbers.split(',').map(Number);
    if (winningNumbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개의 숫자이어야 합니다.');
    }

    winningNumbers.forEach((x) => {
      if (!(Number.isInteger(x) || x === ',')) {
        throw new Error(
          '[ERROR] 숫자와 쉼표 이외의 문자는 입력할 수 없습니다.',
        );
      }
      if (typeof Number(x) === 'number' && !(x >= 1 && x <= 45)) {
        throw new Error('[ERROR] 당첨 번호는 1 ~ 45 사이의 숫자여야 합니다.');
      }
      if (winningNumbers.length !== new Set(winningNumbers).size) {
        throw new Error('[ERROR] 당첨 번호는 중복되지 않아야합니다.');
      }
    });

    const bonusNumber = Number(
      await Console.readLineAsync('\n보너스 번호을 입력해주세요.\n'),
    );
    if (isNaN(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }
    if (!(bonusNumber >= 1 && bonusNumber <= 45)) {
      throw new Error('[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자여야 합니다.');
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }

    let money = 0;
    let matchTable = new Array(5).fill(0);

    for (let lotto of lottoList) {
      let matchCount = 0;
      for (let number of winningNumbers) {
        if (lotto.includes(number)) {
          matchCount += 1;
        }
      }
      if (matchCount === 6) {
        matchTable[0] += 1;
        money += 2000000000;
      }
      if (matchCount === 5 && lotto.includes(bonusNumber)) {
        matchTable[1] += 1;
        money += 30000000;
      }
      if (matchCount === 5) {
        matchTable[2] += 1;
        money += 1500000;
      }
      if (matchCount === 4) {
        matchTable[3] += 1;
        money += 50000;
      }
      if (matchCount === 3) {
        matchTable[4] += 1;
        money += 5000;
      }
    }
    const profitRate = ((money / purchaseAmount) * 100).toFixed(1);

    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${matchTable[4]}개`);
    Console.print(`4개 일치 (50,000원) - ${matchTable[3]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchTable[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchTable[1]}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${matchTable[0]}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
