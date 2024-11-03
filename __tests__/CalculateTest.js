import Lotto from "../src/Lotto.js";
import LottoModel from "../src/model/lottoModel.js";

describe("로또 계산 결과 테스트", () => {
  test("당첨 통계 테스트", () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottoList = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 13],
      [1, 2, 3, 4, 15, 16],
      [1, 2, 3, 14, 15, 16],
      [1, 2, 10, 14, 15, 16]
    ];
    const outputs = [
      "firstPlace",
      "secondPlace",
      "thirdPlace",
      "fourthPlace",
      "fifthPlace",
      "blank"
    ];

    lottoList.forEach((number, index) => {
      expect(new Lotto(number).compareLotto(winningNumber, bonusNumber)).toBe(outputs[index]);
    })
  })

  test("수익률 계산 테스트", () => {
    const model = new LottoModel();
    model.setPrice(7000);
    model.userDetails = {
        fifthPlace : 1,
        fourthPlace : 2,
        thirdPlace : 0,      
        secondPlace : 1,
        firstPlace : 0,
    };
    const expectedOutput = 430071.43;
    const profit = model.calculateProfit();

    expect(profit).toBe(expectedOutput);
  })
})