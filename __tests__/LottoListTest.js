import LottoList from "../src/LottoList.js";
import { Random } from "@woowacourse/mission-utils";

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

  test("예산 입력 테스트 3: 문자열(NaN)", () => {
    expect(() => {
      new LottoList("string");
    }).toThrow("[Error] : 금액은 1000원 단위입니다");
  });

  test("당첨 번호 테스트1 : 문자열 입력", () => {
    expect(() => {
      let ll = new LottoList(1000);
      ll.winnubmers = [8, 21, 23, 41, "string"];
      ll.winnubmers.forEach(num=>{ll.checkwinnumbers(num);})
    }).toThrow("[Error] : 당첨번호는 숫자입니다.");
  });
  test("당첨 번호 테스트2 : 범위 밖 입력", () => {
    expect(() => {
      let ll = new LottoList(1000);
      ll.winnubmers = [8, 21, 23, 41, 100];
      ll.winnubmers.forEach(num=>{ll.checkwinnumbers(num);})
    }).toThrow("[Error] : 당첨번호는 1~45 값입니다.");
  });
  test("보너스 번호 테스트1: 범위 밖 입력", () => {
    expect(() => {
      let ll = new LottoList(1000);
      ll.bonusnubmer = 100;
      ll.checkwinnumbers(ll.bonusnubmer);
    }).toThrow("[Error] : 당첨번호는 1~45 값입니다.");
  });
  test("당첨 번호 테스트2 : 문자열 입력", () => {
    expect(() => {
      let ll = new LottoList(1000);
      ll.bonusnubmer = "string"
      ll.checkwinnumbers(ll.bonusnubmer);
    }).toThrow("[Error] : 당첨번호는 숫자입니다.");
  });

});
