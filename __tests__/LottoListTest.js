import LottoList from "../src/LottoList.js";

describe("LottoList 테스트", () => {
  test("예산 입력 테스트 1: 정상입력", () => {
    let ll = new LottoList(5000);
    expect(ll.numitem).toBe(5);
  });

  test("예산 입력 테스트 2: 금액이 1000원 단위가 아닐 때 오류 발생", () => {
    expect(() => {
      new LottoList(5500);
    }).toThrow("[Error] : 금액은 1000원 단위입니다");
  });

  test("예산 입력 테스트 3: 문자열(NaN)", () => {
    expect(() => {
      new LottoList("string");
    }).toThrow("[Error] : 금액은 1000원 단위입니다");
  });
});
