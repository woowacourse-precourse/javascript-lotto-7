import validateWinningNumber from '../validators/WinningNumberValidator.js';
import validateBonusNumber from '../validators/BonusNumberValidator.js';
import { splitByDelimiter } from '../utils/game.js';

class LottoChecker {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers) {
    this.#validateWinningNumbers(winningNumbers);
    this.#winningNumbers = splitByDelimiter(winningNumbers);
  }

    /**
   * 보너스 번호 설정 메서드
   * @param {string} bonusNumber - 사용자로부터 입력받은 보너스 번호 문자열
   * 유효성 검사 후, 보너스 번호를 숫자로 변환하여 저장
   */
  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

    /**
   * 로또 번호 리스트에 대한 매칭 결과 생성 메서드
   * @param {Array} lottoNumbersList - 로또 번호 배열 리스트
   * @returns {Array} 매칭 결과 객체 배열 ({ matchCount, isBonusMatched })
   */
  getMatchResults(lottoNumbersList) {
    return lottoNumbersList.map(lottoNumbers => ({
      matchCount: this.#calculateMatchCount(lottoNumbers),
      isBonusMatched: this.#checkBonusMatch(lottoNumbers),
    }));
  }

  #validateWinningNumbers(numbers) {
    validateWinningNumber(numbers);
  }

  #validateBonusNumber(bonusNumber) {
    validateBonusNumber(bonusNumber, this.#winningNumbers);
  }

  #calculateMatchCount(lottoNumbers) {
    return this.#winningNumbers.filter(number => lottoNumbers.includes(number)).length;
  }

  #checkBonusMatch(lottoNumbers) {
    return lottoNumbers.includes(this.#bonusNumber);
  }
}

export default LottoChecker;
