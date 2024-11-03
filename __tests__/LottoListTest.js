import LottoList from "../src/LottoList.js";
import Lotto from "../src/Lotto.js";
import { Random } from "@woowacourse/mission-utils";

describe("LottoList 테스트", () => {
  test("예산 입력 테스트 1: 정상입력", () => {
    let ll = new LottoList(5000);
    expect(ll.numitem).toBe(5);
  });

  test("예산 입력 테스트 2: 금액이 1000원 단위가 아닐 때 오류 발생", () => {
    expect(() => {
      new LottoList(5500);
    }).toThrow("[ERROR] : 금액은 1000원 단위입니다");
  });

  test("예산 입력 테스트 3: 문자열(NaN)", () => {
    expect(() => {
      new LottoList("string");
    }).toThrow("[ERROR] : 금액은 1000원 단위입니다");
  });

  test("당첨 번호 테스트1: 문자열 입력", () => {
    expect(() => {
      let ll = new LottoList(1000);
      ll.bonusnubmer = 10;
      ll.winnubmers = [8, 21, 23, 41, 29, "string"];
      ll.checkwinnumbers();
    }).toThrow("[ERROR] : 당첨번호는 숫자입니다.");
  });

  test("당첨 번호 테스트2: 범위 밖 입력", () => {
    expect(() => {
      let ll = new LottoList(1000);
      ll.bonusnubmer = 10;
      ll.winnubmers = [8, 21, 23, 41, 32, 100];
      ll.checkwinnumbers();
    }).toThrow("[ERROR] : 당첨번호는 1~45 값입니다.");
  });

  test("당첨 번호 테스트3: 중복 수 입력", () => {
    expect(() => {
      let ll = new LottoList(1000);
      ll.bonusnubmer = 10;
      ll.winnubmers = [8, 21, 23, 14, 41, 41];
      ll.checkwinnumbers();
    }).toThrow("[ERROR] : 당첨번호는 unique 해야합니다");
  });

  test("당첨 번호 테스트4: 입력 부족", () => {
    expect(() => {
      let ll = new LottoList(1000);
      ll.bonusnubmer = 10;
      ll.winnubmers = [8, 21, 23, 41, 15];
      ll.checkwinnumbers();
    }).toThrow("[ERROR] : 당첨번호는 6개 입니다");
  });

  test("보너스 번호 테스트1: 범위 밖 입력", () => {
    expect(() => {
      let ll = new LottoList(1000);
      ll.bonusnubmer = 100;
      ll.winnubmers = [8, 21, 23, 14, 39, 41];
      ll.checkwinnumbers();
    }).toThrow("[ERROR] : 당첨번호는 1~45 값입니다.");
  });

  test("보너스 번호 테스트2: 문자열 입력", () => {
    expect(() => {
      let ll = new LottoList(1000);
      ll.bonusnubmer = "string";
      ll.winnubmers = [8, 21, 23, 14, 40, 41];
      ll.checkwinnumbers();
    }).toThrow("[ERROR] : 당첨번호는 숫자입니다.");
  });

  test("보너스 번호 테스트3: 중복 입력", () => {
    expect(() => {
      let ll = new LottoList(1000);
      ll.bonusnubmer = 41;
      ll.winnubmers = [8, 21, 23, 14, 41, 40];
      ll.checkwinnumbers();
    }).toThrow("[ERROR] : 보너스 번호가 중복됩니다.");
  });

  test("당첨 테스트", () => {
      let ll = new LottoList(1000);
      ll.bonusnubmer = "string";
      ll.winnubmers = [8, 21, 23, 14, 40, 41];
      ll.lottolist[0] = new Lotto([8, 21, 23, 14, 40, 41]);
      ll.allwincheck();
      expect(ll.winlist[0]).toBe(1);
    });

});
