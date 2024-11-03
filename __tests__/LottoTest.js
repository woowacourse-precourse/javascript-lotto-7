import {
  ERR_MSG_BONUS_NUMBER,
  ERR_MSG_PURCHASE_FEE,
  ERR_MSG_WINNING_NUMBERS_INVALID_STRING
} from "../src/constants";
import getFee from '../src/processors/feeProcessor';
import Lotto from "../src/Lotto";
import getWinningNums from "../src/processors/winningNumsProcessor";
import getBonusNumber from "../src/processors/bonusNumProcessor";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 범위 외에 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow("[ERROR]");
  })

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});

describe("구입 금액 입력 검증 테스트", () => {
  test("1000 단위의 숫자가 들어오면 통과", () => {
    expect(getFee("10000")).toBe(10000);
  });

  test("1000 단위가 아닌 숫자가 들어오면 에러 발생", () => {
    expect(() => getFee("1400")).toThrow(ERR_MSG_PURCHASE_FEE);
  })

  test("숫자 외의 문자가 들어오면 에러 발생", () => {
    expect(() => getFee("10;j")).toThrow(ERR_MSG_PURCHASE_FEE);
  })
})

describe("당첨 번호 입력 검증 테스트", () => {
  test("숫자, 구분자 외의 문자가 들어올 시 예외가 발생한다.", () => {
    expect(() => getWinningNums("1,2,;,4,5,6")).toThrow(ERR_MSG_WINNING_NUMBERS_INVALID_STRING);
  })
})

describe("보너스 번호 입력 검증 테스트", () => {
  test("문자가 들어올 시 예외가 발생한다.", () => {
    expect(() => getBonusNumber("ab")).toThrow(ERR_MSG_BONUS_NUMBER);
  })
  test("1 ~ 45 외의 숫자가 들어올 시 예외가 발생한다.", () => {
    expect(() => getBonusNumber("46")).toThrow(ERR_MSG_BONUS_NUMBER);
  })
})