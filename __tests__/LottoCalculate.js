import { LottoCalculate } from "../src/lotto/index.js";
import { LOTTO_PRIZE_MONEY_MAP } from "../src/constants/index.js";

describe("로또 결과 계산", () => {
  const lottoNumbers = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
  ];

  test.each([
    { numbers: [1, 2, 3, 40, 41, 42], bonusNumber: 45, key: 3, description: "3개 일치" },
    { numbers: [1, 2, 3, 4, 40, 41], bonusNumber: 45, key: 4, description: "4개 일치" },
    { numbers: [1, 2, 3, 4, 5, 40], bonusNumber: 45, key: 5, description: "5개 일치" },
    { numbers: [1, 2, 3, 4, 5, 40], bonusNumber: 6, key: "5B", description: "5개 + 보너스 번호 일치" },
    { numbers: [1, 2, 3, 4, 5, 6], bonusNumber: 45, key: 6, description: "6개 일치" },
  ])(
    "calculateResult(lottoNumbers, numbers, bonusNumber)를 실행하면 key의 value가 1로 증가한다.",
    ({ numbers, bonusNumber, key }) => {
      const result = LottoCalculate.initLottoResult(); // 모든 value들은 0으로 결과 초기화
      result.set(key, 1);
      expect(LottoCalculate.calculateResult(lottoNumbers, numbers, bonusNumber)).toEqual(result);
    }
  );
});

describe("상금 계산", () => {
  test.each([
    { key: 3, description: "3개 일치 - 1개(5000원)" },
    { key: 4, description: "4개 일치 - 1개(50000원)" },
    { key: 5, description: "5개 일치 - 1개(1500000원)" },
    { key: "5B", description: "5개 + 보너스 번호 일치 - 1개(30000000원)" },
    { key: 6, description: "6개 일치 - 1개(2000000000원)" },
  ])("getPrizeMoney(result)를 실행하면 key에 해당하는 상금 1번을 얻는다.", ({ key }) => {
    const prizeMoney = LOTTO_PRIZE_MONEY_MAP.get(key);
    const result = LottoCalculate.initLottoResult(); // 모든 value들은 0으로 결과 초기화
    result.set(key, 1);
    expect(LottoCalculate.getPrizeMoney(result)).toBe(prizeMoney);
  });
});

describe("수익률 계산", () => {
  test.each([
    { prizeMoney: 5000, price: 1000, expected: 500, description: "5000 / 1000 * 100 = 500" },
    { prizeMoney: 50000, price: 1000, expected: 5000, description: "50000 / 1000 * 100 = 5000" },
    { prizeMoney: 1500000, price: 1000, expected: 150000, description: "1500000 / 1000 * 100 = 150000" },
    { prizeMoney: 30000000, price: 1000, expected: 3000000, description: "30000000 / 1000 * 100 = 3000000" },
    { prizeMoney: 2000000000, price: 1000, expected: 200000000, description: "2000000000 / 1000 * 100 = 200000000" },
  ])("getRevenueRate(prizeMoney, price)를 실행하면 expected한 결과를 얻는다.", ({ prizeMoney, price, expected }) => {
    expect(LottoCalculate.getRevenueRate(prizeMoney, price)).toBe(expected);
  });
});
