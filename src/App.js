import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';


// 숫자 비교 후 같으면 1, 다르면 0 리턴
function check_num(a, b) {
  if (a === b) {
    return 1
  }
  return 0
}


// 로또 결과 확인
function lotto_check(NUMBERS, BONUS_NUM, now_check) {
  let CNT = 0
  let BONUS_YN = 0
  for (let i=0; i<6; i++) {
    for (let j=0; j<6; j++) {
      CNT += check_num(NUMBERS[i], now_check[j])
    }
    BONUS_YN += check_num(now_check[i], BONUS_NUM)
  }
  // 3개, 4개, 5개, 5개 보너스, 6개, 당첨 안된 개수
  if (CNT === 6) {
    return 4
  }
  if (CNT === 5 && BONUS_YN === 1) {
    return 3
  }
  if (CNT === 5) {
    return 2
  }
  if (CNT === 4) {
    return 1
  }
  if (CNT === 3) {
    return 0
  }
  return 5
}


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
    // 1. 금액 입력 기능과 유효성 검사 로직
    const COST = await MissionUtils.Console.readLineAsync('로또 구입 금액을 입력하세요.');
    check_cost(COST); // 입력받은 금액 유효성 검증

    // 2. 로또 발행 기능
    const LOTTO_PCS = parseInt(COST/1000);
    const LOTTO_MADE = [];
    for (let i=0; i<LOTTO_PCS; i++) {
      LOTTO_MADE.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    MissionUtils.Console.print(`${LOTTO_PCS}개를 구매했습니다.`)
    for (let i=0; i<LOTTO_PCS; i++) {
      MissionUtils.Console.print(LOTTO_MADE[i])
    }

    // 3. 로또 당첨값 입력 및 유효성 검사 로직
    const INPUT_NUM = await MissionUtils.Console.readLineAsync('로또 당첨번호 6자리를 ,로 구분하여 입력하세요.');
    const NUMBERS = parse_numbers(INPUT_NUM); // 입력값 유효성 1차 검증
    const LOTTO = new Lotto(NUMBERS); // 생성자 실행
    let BONUS_NUM = await MissionUtils.Console.readLineAsync('보너스번호를 입력하세요.');
    BONUS_NUM = check_bonus(BONUS_NUM, NUMBERS); // 보너스번호 입력값 유효성 검사

    // 4. 로또 당첨 체크
    const LOTTO_RESULT = [0, 0, 0, 0, 0, 0] // 3개, 4개, 5개, 5개 보너스, 6개, 당첨 안된 개수
    for (let i=0; i<LOTTO_PCS; i++) {
      LOTTO_RESULT[lotto_check(NUMBERS, BONUS_NUM, LOTTO_MADE[i])] += 1
    }
    console.log(LOTTO_RESULT)
  }
}

export default App;
