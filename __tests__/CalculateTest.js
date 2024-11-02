import LottoModel from "../src/model/lottoModel";


const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 계산 결과 테스트", () => {
  test("당첨 통계 테스트", () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const userPrice = 6000;
    const lottoList = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 13],
      [1, 2, 3, 4, 15, 16],
      [1, 2, 3, 14, 15, 16],
      [1, 2, 10, 14, 15, 16]
    ];
    mockRandoms([...lottoList]);
    const outputs = [1, 1, 1, 1, 1]

    // when
    const model = new LottoModel();
    model.setPrice(userPrice);
    model.setBonusNumber(bonusNumber);
    model.setWinningNumber(winningNumber);
    model.setWinningStatistics(lottoList);

    const statistics = model.getStatistics();
    
    //then
    expect(statistics).toEqual(outputs);
  })
})