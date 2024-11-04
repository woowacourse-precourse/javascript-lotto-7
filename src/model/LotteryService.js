import LottoNumberValidator from '../utils/LottoNumberValidator.js';
import { LOTTO_ERROR, LOTTO, LOTTO_RANKS, INITIAL_LOTTO_RESULT, LOTTO_PRICE } from '../constant/Constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Output from '../view/Output.js';
import Input from '../view/Input.js';
import Lotto from './Lotto.js';

export default class LotteryService {
  #lottos;
  #winningNumber;
  #bonusNumber;
  #LotteryResult;

  constructor() {
    this.#lottos = [];
    this.#winningNumber = [];
    this.#bonusNumber = [];
    this.#LotteryResult = { ...INITIAL_LOTTO_RESULT };
  }

  get lottos() {
    return this.#lottos;
  }

  get winningNumber() {
    return this.#winningNumber;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  get LotteryResult() {
    return this.#LotteryResult;
  }

  #lottoNumberGenerator() {
    return MissionUtils.Random.pickUniqueNumbersInRange(LOTTO.MINIMUM_NUMBER, LOTTO.MAXIMUM_NUMBER, LOTTO.WINNING_COUNT).sort(
      (a, b) => a - b,
    );
  }

  #lottoNumberValidation(lottoNumbers) {
    const duplicateCheck = [...new Set(lottoNumbers)];

    if (JSON.stringify(duplicateCheck) === JSON.stringify(lottoNumbers)) {
      return;
    }

    if (LOTTO.WINNING_COUNT === lottoNumbers.length) {
      return;
    }

    throw new Error(LOTTO_ERROR.INVALID_LOTTO_ISSUANCE);
  }

  #createLotto(amount) {
    const lottoTicketCount = amount / LOTTO.PRICE;
    for (let issuedCount = 0; issuedCount < lottoTicketCount; issuedCount += 1) {
      const lottoNumbers = this.#lottoNumberGenerator();
      this.#lottoNumberValidation(lottoNumbers);
      this.#lottos.push(new Lotto(lottoNumbers));
    }
  }

  #printLottoInfo() {
    Output.lottoTiketCount(this.lottos.length);

    this.lottos.forEach((lotto) => {
      Output.lottoNumbers(lotto.numbers);
    });
  }

  async #setWinningNumber() {
    const winningNumber = await Input.getLottoWinningNumbers();
    this.#winningNumbervalidator(winningNumber);
    this.#winningNumber = winningNumber.sort((a, b) => a - b);
  }

  #winningNumbervalidator(winningNumber) {
    LottoNumberValidator.countCheck(winningNumber, LOTTO.WINNING_COUNT);
    LottoNumberValidator.rangeCheck(winningNumber);
    LottoNumberValidator.duplicationCheck(winningNumber);
  }

  async #setBonusNumber() {
    const bonusNumber = await Input.getLottoBonusNumber();
    this.#BonusNumbervalidator(this.winningNumber, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #BonusNumbervalidator(winningNumber, bonusNumber) {
    LottoNumberValidator.countCheck(bonusNumber, LOTTO.BONUS_COUNT);
    LottoNumberValidator.rangeCheck(bonusNumber);
    const isDuplicate = winningNumber.some((number) => bonusNumber.includes(number));

    if (isDuplicate) {
      throw new Error(LOTTO_ERROR.DUPLICATE_BONUS_NUMBER);
    }
  }

  getLottoResults() {
    const COUNT_INCREMENT = 1;

    this.lottos.forEach((lotto) => {
      const matchingWinningCount = lotto.numbers.filter((lottoNumber) => this.winningNumber.includes(lottoNumber)).length;
      const matchingBonusCount = lotto.numbers.filter((lottoNumber) => this.bonusNumber.includes(lottoNumber)).length;
      this.#LotteryResult[this.#getRank(matchingWinningCount, matchingBonusCount)] += COUNT_INCREMENT;
    });

    return this.#LotteryResult;
  }

  #getRank(winningCount, bonusCount) {
    if (winningCount === LOTTO.FIRST_PLACE) return LOTTO_RANKS.FIRST;
    if (winningCount === LOTTO.SECOND_PLACE && bonusCount === LOTTO.BONUS_COUNT) return LOTTO_RANKS.SECOND;
    if (winningCount === LOTTO.THIRD_PLACE) return LOTTO_RANKS.THIRD;
    if (winningCount === LOTTO.FOURTH_PLACE) return LOTTO_RANKS.FOURTH;
    if (winningCount === LOTTO.FIFTH_PLACE) return LOTTO_RANKS.FIFTH;
    return LOTTO_RANKS.NONE;
  }

  getProfitPercentage() {
    const totalTicketPrice = this.lottos.length * LOTTO.PRICE;
    const PERCENTAGE = 100;
    let total = 0;

    total += this.LotteryResult[LOTTO_RANKS.FIRST] * LOTTO_PRICE[LOTTO_RANKS.FIRST];
    total += this.LotteryResult[LOTTO_RANKS.SECOND] * LOTTO_PRICE[LOTTO_RANKS.SECOND];
    total += this.LotteryResult[LOTTO_RANKS.THIRD] * LOTTO_PRICE[LOTTO_RANKS.THIRD];
    total += this.LotteryResult[LOTTO_RANKS.FOURTH] * LOTTO_PRICE[LOTTO_RANKS.FOURTH];
    total += this.LotteryResult[LOTTO_RANKS.FIFTH] * LOTTO_PRICE[LOTTO_RANKS.FIFTH];

    const ProfitPercentage = ((total / totalTicketPrice) * PERCENTAGE).toFixed(1);
    return ProfitPercentage;
  }

  async start(amount) {
    this.#createLotto(amount);
    this.#printLottoInfo();
    await this.#setWinningNumber();
    await this.#setBonusNumber();
  }
}
