import { generateLotto } from '../utils/index.js';
import LottoTicket from './LottoTicket.js';

class LottoController {
  constructor(count) {
    this.count = count; // 로또 갯수
    this.lottos = []; // 발행한 로또 객체들을 담는 리스트
    this.createLotto(count);
  }

  createLotto(count) {
    // count 갯수 만큼 로또 만들기
    for (let i = 0; i < count; i += 1) {
      this.lottos.push(new LottoTicket(generateLotto()));
    }
  }

  // 각 로또 티켓들이 얼마의 matchcount를 가졌는지
  checkNumberMatch(winningNumbers) {
    this.lottos.forEach((lotto) => lotto.calculateMatchCount(winningNumbers));
  }

  // 각 로또 티켓들이 얼마의 bonusCount를 가졌는지
  checkBonusMatch(bonusNumber) {
    this.lottos.forEach((lotto) => lotto.calculateBonusCount(bonusNumber));
  }
}
export default LottoController;
