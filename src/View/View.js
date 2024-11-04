import { Console } from "@woowacourse/mission-utils";

export async function getInput(promptMessage) {
  return Console.readLineAsync(promptMessage);
}

export function printLottoTickets(lottoTickets) {}

export function printWinningResult(winningResult) {}

export function printLottoYield(lottoYield) {}
