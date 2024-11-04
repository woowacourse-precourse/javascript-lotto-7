import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';


// 사용자가 문자열로 입력하는 값을 , 를 바탕으로 쪼개어 리스트에 담아 리턴
function parse_numbers(INPUT_NUM) {
  INPUT_NUM.split(',').map((input) => {
    try {
      const PARSED_INPUT = parseInt(input.trim(), 10);
      if (isNaN(PARSED_INPUT)) {
        throw new Error("[ERROR] 숫자가 아닌 값을 입력하였습니다.");
      };
      return PARSED_INPUT;
    } catch (error) {
      throw error;
    };
  })
};


// 보너스번호 입력값 유효성 검사
function check_bonus(BONUS_NUM, NUMBERS) {
  try {
    if (isNaN(BONUS_NUM) || BONUS_NUM > 45 || BONUS_NUM < 1) {
      throw new Error("[ERROR] 보너스번호를 잘못 입력하였습니다.")
    }
    NUMBERS.forEach((num) => {
      if (num === BONUS_NUM) {
        throw new Error("[ERROR] 로또 번호와 동일한 보너스번호를 입력하였습니다.");
      }
    })
  } catch (error) {
    throw error;
  }
};


class App {
  async run() {
    const LOTTO = new Lotto();
    const INPUT_NUM = MissionUtils.Console.readLineAsync();
    const NUMBERS = parse_numbers(INPUT_NUM); // 입력값 유효성 1차 검증
    await LOTTO.constructor(NUMBERS);
    const BONUS_NUM = MissionUtils.Console.readLineAsync();
    
    // 보너스번호 입력값 유효성 검사
    check_bonus(BONUS_NUM, NUMBERS);
  }
}

export default App;
