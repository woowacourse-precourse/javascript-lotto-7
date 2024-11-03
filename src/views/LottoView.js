import { Console } from '@woowacourse/mission-utils';

class LottoView {
  printLottoNumbers(lottoCount, lottoNumbers) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottoNumbers.forEach(numbers => {
      Console.print(`[${numbers.join(', ')}]`);
    });
  }
}

export default LottoView;
