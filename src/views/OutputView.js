import OUTPUT_MESSAGES from '../constants/outputConstants.js';
import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printLottoAmount(amount) {
    Console.print(`${amount}${OUTPUT_MESSAGES.PURCHASE_LOTTO}`);
  }

  static printLottoNumbers(lottoRepository) {
    lottoRepository.forEach((lotto) => {
      Console.print(`[${lotto.getLotto().join(', ')}]`);
    });
  }

  static printWinningStatistics() {
    Console.print(OUTPUT_MESSAGES.WINNING_STATISTICS);
  }

  static printUnderBar() {
    Console.print(OUTPUT_MESSAGES.UNDERBAR);
  }

  static printFifthPlaceWinner(result) {
    Console.print(
      `${OUTPUT_MESSAGES.FIFTH_PLACE_WINNER}${result.getFifthPlaceCount()}${
        OUTPUT_MESSAGES.AMOUNT
      }`
    );
  }

  static printFourthPlaceWinner(result) {
    Console.print(
      `${OUTPUT_MESSAGES.FOURTH_PLACE_WINNER}${result.getFourthPlaceCount()}${
        OUTPUT_MESSAGES.AMOUNT
      }`
    );
  }

  static printThirdPlaceWinner(result) {
    Console.print(
      `${OUTPUT_MESSAGES.THIRD_PLACE_WINNER}${result.getThirdPlaceCount()}${
        OUTPUT_MESSAGES.AMOUNT
      }`
    );
  }

  static printSecondPlaceWinner(result) {
    Console.print(
      `${OUTPUT_MESSAGES.SECOND_PLACE_WINNER}${result.getSecondPlaceCount()}${
        OUTPUT_MESSAGES.AMOUNT
      }`
    );
  }

  static printFirstPlaceWinner(result) {
    Console.print(
      `${OUTPUT_MESSAGES.FIRST_PLACE_WINNER}${result.getFirstPlaceCount()}${
        OUTPUT_MESSAGES.AMOUNT
      }`
    );
  }

  static printTotalReturn(totalReturn) {
    Console.print(
      `${OUTPUT_MESSAGES.TOTAL_RETURN}${totalReturn}${OUTPUT_MESSAGES.PERCENT_PRINT}`
    );
  }

  static printNewLine() {
    Console.print('');
  }

  static printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }
}

export default OutputView;
