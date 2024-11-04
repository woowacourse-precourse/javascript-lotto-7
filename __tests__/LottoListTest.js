import { LottoList } from "../src/LottoList.js";
import Lotto from "../src/Lotto.js";

describe("LottoList 클래스 테스트", () => {
  test("정상적으로 로또 리스트가 생성된다.", () => {
    const lottoList = new LottoList(3);
    expect(lottoList.lottoList.length).toBe(3); // 여기에서 필요한 추가적인 검증 사항을 추가할 수 있습니다.
  });

  test("로또 리스트의 각 항목이 Lotto 인스턴스이며, 개수가 맞아야 한다.", () => {
    const lottoList = new LottoList(2);
    expect(lottoList.lottoList[0]).toBeInstanceOf(Lotto);
    expect(lottoList.lottoList.length).toBe(2);
  });
});
