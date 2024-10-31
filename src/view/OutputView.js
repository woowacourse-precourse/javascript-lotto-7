import { Console } from '@woowacourse/mission-utils';

class OuputView {
  static printMessage(value) {
    Console.print(value);
  }

  static printLottoList(lottoNumbers) {
    Console.print(`\n${lottoNumbers.length}개를 구매했습니다.`);
    Console.print(`${lottoNumbers.map((item) => `[${item.join(', ')}]`).join('\n')}`);
  }
}

export default OuputView;
