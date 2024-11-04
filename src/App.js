import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';


// 투입 금액 유효성 검증
function check_cost(COST) {
  try {
    if (isNaN(COST) || COST % 1000 !== 0) {
      throw new Error("[ERROR] 유효한 금액이 아닙니다.")
    }
  } catch (error) {
    throw error;
  }
}


// 사용자가 문자열로 입력하는 값을 , 를 바탕으로 쪼개어 리스트에 담아 리턴
function parse_numbers(INPUT_NUM) {
  return INPUT_NUM.split(',').map((input) => {
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
  BONUS_NUM = parseInt(BONUS_NUM)
  try {
    if (isNaN(BONUS_NUM) || BONUS_NUM > 45 || BONUS_NUM < 1) {
      throw new Error("[ERROR] 보너스번호를 잘못 입력하였습니다.")
    }
    for (let i=0; i < 6; i++) {
      if (NUMBERS[i] === BONUS_NUM) {
        throw new Error("[ERROR] 로또 번호와 동일한 보너스번호를 입력하였습니다.")
      }
    }
    return BONUS_NUM
  } catch (error) {
    throw error;
  }
};


class App {
  async run() {
    const COST = await MissionUtils.Console.readLineAsync('로또 구입 금액을 입력하세요.');
    check_cost(COST); // 입력받은 금액 유효성 검증
    const INPUT_NUM = await MissionUtils.Console.readLineAsync('로또 당첨번호 6자리를 ,로 구분하여 입력하세요.');
    const NUMBERS = parse_numbers(INPUT_NUM); // 입력값 유효성 1차 검증
    const LOTTO = new Lotto(NUMBERS); // 생성자 실행
    let BONUS_NUM = await MissionUtils.Console.readLineAsync('보너스번호를 입력하세요.');
    BONUS_NUM = check_bonus(BONUS_NUM, NUMBERS); // 보너스번호 입력값 유효성 검사
  }
}

export default App;
