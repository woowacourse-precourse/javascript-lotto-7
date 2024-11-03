import OUTPUT_MESSAGES from '../constants/outputConstants.js';
import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static async printLottoAmount(amount) {
    Console.print(`${amount}${OUTPUT_MESSAGES.PURCHASE_LOTTO}`);
  }

  static async printLottoNumbers(lottoRepository) {
    lottoRepository.forEach((lotto) => {
      Console.print(`[${lotto.getLotto().join(', ')}]`);
    });
  }

  static async printWinningStatistics() {
    Console.print(OUTPUT_MESSAGES.WINNING_STATISTICS);
  }

  static async printUnderBar() {
    Console.print(OUTPUT_MESSAGES.UNDERBAR);
  }

  static async printFifthPlaceWinner(result) {
    Console.print(
      `${OUTPUT_MESSAGES.FIFTH_PLACE_WINNER}${result.getFifthPlaceCount()}${
        OUTPUT_MESSAGES.AMOUNT
      }`
    );
  }

  static async printFourthPlaceWinner(result) {
    Console.print(
      `${OUTPUT_MESSAGES.FOURTH_PLACE_WINNER}${result.getFourthPlaceCount()}${
        OUTPUT_MESSAGES.AMOUNT
      }`
    );
  }

  static async printThirdPlaceWinner(result) {
    Console.print(
      `${OUTPUT_MESSAGES.THIRD_PLACE_WINNER}${result.getThirdPlaceCount()}${
        OUTPUT_MESSAGES.AMOUNT
      }`
    );
  }

  static async printSecondPlaceWinner(result) {
    Console.print(
      `${OUTPUT_MESSAGES.SECOND_PLACE_WINNER}${result.getSecondPlaceCount()}${
        OUTPUT_MESSAGES.AMOUNT
      }`
    );
  }

  static async printFirstPlaceWinner(result) {
    Console.print(
      `${OUTPUT_MESSAGES.FIRST_PLACE_WINNER}${result.getFirstPlaceCount()}${
        OUTPUT_MESSAGES.AMOUNT
      }`
    );
  }

  static async printTotalReturn(totalReturn) {
    Console.print(
      `${OUTPUT_MESSAGES.TOTAL_RETURN}${totalReturn}${OUTPUT_MESSAGES.PERCENT_PRINT}`
    );
  }

  static async printNewLine() {
    Console.print('');
  }

  static printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }
}

export default OutputView;
