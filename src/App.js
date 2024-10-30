import { Console } from '@woowacourse/mission-utils';
import { LOTTO } from './constant.js';

class App {
  async run() {
    const purchasePrice = await Console.readLineAsync(
      '구입금액을 입력해주세요.\n'
    );

    const lottoCount = Math.floor(purchasePrice / LOTTO.PRICE);

    Console.print(`${lottoCount}개를 구매했습니다.`);

    let lottoNumbers = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );
    lottoNumbers = lottoNumbers
      .split(',')
      .map((lottoNumber) => parseInt(lottoNumber));

    const bonusNumber = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n'
    );
  }
}

export default App;
