import { Console } from "@woowacourse/mission-utils";

export const PRIZES = {
  3: 5000,
  4: 50000,
  5: 1500000,
  5.5: 30000000,
  6: 2000000000,
};

export function displayTicketCount(ticketCount) {
  Console.print(`${ticketCount}개를 구매했습니다.`);
}
export function displayLottoTickets(purchasedLottos) {
  purchasedLottos.forEach((lotto) => {
    Console.print(`[${lotto.getNumbers().join(", ")}]`);
  });
}
export function displayLottoNumbers(winningNumbers, bonusNumber) {
  Console.print(`당첨 번호: ${winningNumbers.join(", ")}`);
  Console.print(`보너스 번호: ${bonusNumber}`);
}

export function displayStatistics(matchCounts, profitRate) {
  Console.print("당첨 통계---");
  Console.print(
    `3개 일치 (${PRIZES[3].toLocaleString()}원) - ${matchCounts[3]}개`
  );
  Console.print(
    `4개 일치 (${PRIZES[4].toLocaleString()}원) - ${matchCounts[4]}개`
  );
  Console.print(
    `5개 일치 (${PRIZES[5].toLocaleString()}원) - ${matchCounts[5]}개`
  );
  Console.print(
    `5개 일치, 보너스 볼 일치 (${PRIZES[5.5].toLocaleString()}원) - ${
      matchCounts[5.5]
    }개`
  );
  Console.print(
    `6개 일치 (${PRIZES[6].toLocaleString()}원) - ${matchCounts[6]}개`
  );
  Console.print(`총 수익률은 ${profitRate}%입니다.`);
}

export function displayError(message) {
  Console.print(message);
}
