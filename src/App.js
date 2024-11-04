import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('구입금액을 입력해 주세요.');
    const inputMoney = await Console.readLineAsync('');
    
    // 구입 금액이 숫자가 아닌 경우 예외 처리
    if (isNaN(inputMoney)) {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }
    
    // 1000원 단위로 나누어 떨어지지 않으면 예외 처리
    if (inputMoney % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }
    
    const lottoCount = inputMoney / 1000;
    Console.print(`${lottoCount}개를 구매했습니다.`);
    
    let RanLotto = [];
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      RanLotto.push(lottoNumbers.sort((a, b) => a - b));
    }
    Console.print(RanLotto);
    
    Console.print('당첨번호를 입력해 주세요.');
    const winLottoInput = await Console.readLineAsync('');
    const winLotto = winLottoInput.split(',').map(num => parseInt(num.trim()));
    
    // 로또 번호가 숫자가 아닌 경우우
    if (winLotto.some(isNaN)) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    // 로또 번호가 6개가 아니거나 중복되는 경우
    if (new Set(winLotto).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개의 중복되지 않는 숫자여야 합니다.");
    }
    // 로또 번호가 숫자 범위를 초과하는 경우
    if (winLotto.some(num => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    
    Console.print('보너스 번호를 입력해 주세요.');
    const bonusLotto = await Console.readLineAsync('');
    
    // 보너스 번호가 숫자 범위에 없는 경우
    if (isNaN(bonusLotto) || bonusLotto < 1 || bonusLotto > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    // 보너스 번호가 중복되는 경우
    if (winLotto.includes(bonusLotto)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.");
    }
    
    let results = { correct3: 0, correct4: 0, correct5: 0, correct5b: 0, correct6: 0 };
    
    RanLotto.forEach(lotto => {
      const matchedCount = lotto.filter(num => winLotto.includes(num)).length;
      const hasBonus = lotto.includes(bonusLotto);
      
      if (matchedCount === 6) results.correct6++;
      else if (matchedCount === 5 && hasBonus) results.correct5b++;
      else if (matchedCount === 5) results.correct5++;
      else if (matchedCount === 4) results.correct4++;
      else if (matchedCount === 3) results.correct3++;
    });
    
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${results.correct3}개`);
    Console.print(`4개 일치 (50,000원) - ${results.correct4}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results.correct5}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.correct5b}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results.correct6}개`);
    
    const totalPrize = (results.correct3 * 5000) + (results.correct4 * 50000) +(results.correct5 * 1500000) + (results.correct5b * 30000000) + (results.correct6 * 2000000000);
    const Rate = (totalPrize / inputMoney) * 100;
    Console.print(`총 수익률은 ${Rate.toFixed(2)}%입니다.`);
  }
}

export default App;
