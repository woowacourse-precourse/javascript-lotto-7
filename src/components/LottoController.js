import { Console, Random } from '@woowacourse/mission-utils';
import {
  InputPrompts,
  Lotto,
  OutputMessages,
  Prize,
  PrizeMoney,
} from '../resources/Constants.js';
import purchaseAmountValidator from '../validation/purchaseAmountValidator.js';
import { bonusNumberValidator } from '../validation/bonusNumberValidator.js';

class LottoController {
  #purchaseAmount;
  #lottoTickets;
  #bonusNumber;

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  setPurchaseAmount(purchaseAmount) {
    purchaseAmountValidator(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setBonusNumber(bonusNumber) {
    bonusNumberValidator(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  isEmptyPurchaseAmount() {
    return this.#purchaseAmount === undefined || this.#purchaseAmount === null;
  }

  isEmptyLottoTickets() {
    return this.#lottoTickets === undefined || this.#lottoTickets === null;
  }

  #sortAscending(lottoTickets) {
    return lottoTickets.map((ticket) => ticket.slice().sort((a, b) => a - b));
  }

  generateLottoTickets() {
    if (!this.isEmptyPurchaseAmount()) {
      const ticketCount = this.#purchaseAmount / 1000;

      const lottoTickets = Array.from({ length: ticketCount }, () =>
        Random.pickUniqueNumbersInRange(
          Lotto.MIN_NUMBER,
          Lotto.MAX_NUMBER,
          Lotto.COUNT,
        ),
      );

      this.#lottoTickets = this.#sortAscending(lottoTickets);
    }
  }

  displayLottoTickets() {
    if (!this.isEmptyLottoTickets()) {
      const ticketCount = this.#purchaseAmount / 1000;

      Console.print(OutputMessages.PURCHASE_MESSAGE(ticketCount));

      this.#lottoTickets.forEach((lottoTicket) => {
        Console.print(lottoTicket);
      });
    }
  }

  async promptPurchaseAmount() {
    try {
      const newPurchaseAmount = await Console.readLineAsync(
        InputPrompts.purchaseAmount,
      );

      this.setPurchaseAmount(newPurchaseAmount);
    } catch (error) {
      Console.print(`${error.message}\n`);
      await this.promptPurchaseAmount();
    }
  }

  async promptBonusNumber() {
    try {
      const bonusNumber = await Console.readLineAsync(InputPrompts.bonusNumber);

      this.setBonusNumber(bonusNumber);
    } catch (error) {
      Console.print(`${error.message}\n`);
      await this.promptBonusNumber();
    }
  }

  getMatchCount(lottoTicket, winningNumbers) {
    let matchCount = lottoTicket.filter((number) =>
      winningNumbers.includes(number),
    ).length;

    if (matchCount === 5 && lottoTicket.includes(this.#bonusNumber)) {
      matchCount = '5B';
    }

    return matchCount;
  }

  compareLottoTickets(winningNumbers) {
    const winningResult = { 3: 0, 4: 0, 5: 0, '5B': 0, 6: 0 };

    this.#lottoTickets.forEach((lottoTicket) => {
      const matchCount = this.getMatchCount(lottoTicket, winningNumbers);
      if (matchCount !== 0 && matchCount !== 1 && matchCount !== 2) {
        winningResult[this.getMatchCount(lottoTicket, winningNumbers)] += 1;
      }
    });

    return winningResult;
  }

  PrintLottoWinningResult(winningResult) {
    const winningResultMessage = [
      '당첨 통계',
      '---',
      `3개 일치 (${Prize.MATCH_3}원) - ${winningResult[3]}개`,
      `4개 일치 (${Prize.MATCH_4}원) - ${winningResult[4]}개`,
      `5개 일치 (${Prize.MATCH_5}원) - ${winningResult[5]}개`,
      `5개 일치, 보너스 볼 일치 (${Prize.MATCH_5_BONUS}원) - ${winningResult['5B']}개`,
      `6개 일치 (${Prize.MATCH_6}원) - ${winningResult[6]}개`,
    ];

    winningResultMessage.forEach((message) => Console.print(message));
  }

  printRateOfReturn(winningResult) {
    const totalPrizeMoney = Object.entries(winningResult).reduce(
      (acc, [matchCount, lottoCount]) =>
        acc + lottoCount * PrizeMoney[matchCount],
      0,
    );

    const rateOfReturn = (
      (totalPrizeMoney / this.#purchaseAmount) *
      100
    ).toFixed(1);

    Console.print(OutputMessages.TOTAL_ROR(rateOfReturn));
  }

  displayWinningResult(winningNumbers) {
    const winningResult = this.compareLottoTickets(winningNumbers);

    this.PrintLottoWinningResult(winningResult);
    this.printRateOfReturn(winningResult);
  }
}

export default LottoController;
