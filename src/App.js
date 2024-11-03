import { Console } from "@woowacourse/mission-utils"
import printAllLotto from "./AllLotto.js";
import PrintResult from "./LottoResult.js";
import { ranking, checkRank } from "./CheckLotto.js";
import { ERROR_MESSAGES } from "./ErrorMessages.js";

class App {
  async run() {
    let inputPrice;
    let lottoNum;

    while (true) {
      try {
        inputPrice = await Console.readLineAsync("구입금액을 입력해 주세요.");
        const parsedPrice = Number(inputPrice);
        if (isNaN(parsedPrice) || parsedPrice < 0) {
          throw new Error(ERROR_MESSAGES.not_number);
        }
        if (parsedPrice === 0) {
          throw new Error(ERROR_MESSAGES.zero_number);
        }
        if (parsedPrice % 1000 !== 0) {
          throw new Error(ERROR_MESSAGES.no_div_1000);
        }
        if (parsedPrice > 100000) {
          throw new Error(ERROR_MESSAGES.over_max_price);
        }
        // 로또 개수 계산
        lottoNum = parsedPrice / 1000;
        Console.print(`${lottoNum}개를 구매했습니다.`);
        break; // 유효한 입력일 경우 루프 종료
      } catch (error) {
        Console.print(error.message); // 에러 메시지 출력
      }
    }

    const lottoArray = printAllLotto(lottoNum);

    let winningNumbers;
    while (true) {
      try {
        const inputNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
        winningNumbers = inputNumbers.split(",").filter(item => item !== "").map(Number);
        if (winningNumbers.length !== 6) {
          throw new Error(ERROR_MESSAGES.not_6_nums);
        }
        for (let i = 0; i < 6; i++) {
          if (isNaN(winningNumbers[i])) {
            throw new Error(ERROR_MESSAGES.not_number);
          }
          if (winningNumbers[i] > 45 || winningNumbers[i] < 1) {
            throw new Error(ERROR_MESSAGES.not_1to45);
          }
        }
        const lottoSet = new Set(winningNumbers);
        if (lottoSet.size !== winningNumbers.length) {
          throw new Error(ERROR_MESSAGES.duplicate_num);
        }
        break;
      }
      catch (error) {
        Console.print(error.message);
      }
    }

    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
        const parsedPrice = Number(bonusNumber);
        if (isNaN(parsedPrice)) {
          throw new Error(ERROR_MESSAGES.not_number);
        }
        if (parsedPrice < 1 || parsedPrice > 45) {
          throw new Error(ERROR_MESSAGES.not_1to45);
        }
        if (bonusNumber.includes(",")) {
          throw new Error(ERROR_MESSAGES.not_one_num);
        }
        break; // 유효한 입력일 경우 루프 종료
      } catch (error) {
        Console.print(error.message); // 에러 메시지 출력
      }
    }

    for (let i = 0; i < lottoNum; i++) {
      checkRank(winningNumbers, bonusNumber, lottoArray[i].getNumbers())
    }

    PrintResult(ranking, inputPrice);
  }
}

export default App;
