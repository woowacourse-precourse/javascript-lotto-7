import InputHandler from "./InputHandler.js";
import OutputHandler from "./OutputHandler.js";
import { PROGRAM_MESSAGES, STATICS_MESSAGE } from "./Constant.js";
import { validatePrice } from "./Validation.js";
import { MissionUtils } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

export const startLotto = async () => {
  //로또 구입 금액을 입력받는다.
  const price = await InputHandler.input(PROGRAM_MESSAGES.PRICE_PROMPT);
  const tryNum = price / 1000;
  // 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
  validatePrice(tryNum);

  // 로또 몇장인지 출력
  OutputHandler.output("\n" + tryNum + PROGRAM_MESSAGES.TRY_NUM_PROMPT);
  //tryNum 만큼의 로또를 발행
  const lottoNumbers = getLottoNumbers(tryNum);

  // 당첨 번호를 쉼표(,)를 기준으로 구분하여 입력 받는다.
  let winningNumbers = await InputHandler.input(
    PROGRAM_MESSAGES.WINNING_NUMBER_PROMPT
  );
  winningNumbers = winningNumbers.split(",").map((num) => num.trim());

  //로또 번호 검증 ( 6개인지 )
  const validateLotto = new Lotto(winningNumbers);

  //보너스 번호 입력
  const bonusNumber = await InputHandler.input(
    PROGRAM_MESSAGES.BONUS_NUMBER_PROMPT
  );

  //당첨통계
  OutputHandler.output(STATICS_MESSAGE.RESULT_MESSAGE);
  getStatics(lottoNumbers, winningNumbers, bonusNumber, price);
};

export const getLottoNumbers = (tryNum) => {
  const lottoNumbersArray = [];
  for (let i = 0; i < tryNum; i++) {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    //오름차순 정렬
    const lotto = new Lotto(numbers.sort((a, b) => a - b));
    lotto.displayNumbers();
    lottoNumbersArray.push(lotto);
  }
  return lottoNumbersArray;
};

export const getStatics = (
  lottoNumbers,
  winningNumbers,
  bonusNumber,
  price
) => {
  const result = {
    threeMatches: 0,
    fourMatches: 0,
    fiveMatches: 0,
    fiveBonusMatches: 0,
    sixMatches: 0,
  };
  let income = 0;
  let rate = 0;
  lottoNumbers.forEach((num) => {
    const matchCount = num.countMatchNumber(winningNumbers);

    if (matchCount === 3) {
      result.threeMatches += 1;
      income += 5000;
    } else if (matchCount === 4) {
      result.fourMatches += 1;
      income += 50000;
    } else if (matchCount === 5) {
      if (num.numbers.includes(bonusNumber)) {
        result.fiveBonusMatches += 1;
        income += 30000000;
      } else {
        result.fiveMatches += 1;
        income += 1500000;
      }
    } else if (matchCount === 6) {
      result.sixMatches += 1;
      income += 2000000000;
    }
  });

  OutputHandler.output(
    `${STATICS_MESSAGE.THREE_MATCHES} ${result.threeMatches}개`
  );
  OutputHandler.output(
    `${STATICS_MESSAGE.FOUR_MATCHES} ${result.fourMatches}개`
  );
  OutputHandler.output(
    `${STATICS_MESSAGE.FIVE_MATCHES} ${result.fiveMatches}개`
  );
  OutputHandler.output(
    `${STATICS_MESSAGE.BONUS_MATCHES} ${result.fiveBonusMatches}개`
  );
  OutputHandler.output(`${STATICS_MESSAGE.SIX_MATCHES} ${result.sixMatches}개`);

  if (income !== 0) {
    rate = (income / price) * 100;
  }

  OutputHandler.output(STATICS_MESSAGE.RATE_OF_RETURN(rate.toFixed(2)));
};
