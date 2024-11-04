import Lotto from "../src/Lotto";
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 클래스 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test('로또 번호를 랜덤 생성하고 오름차순으로 정렬하여 반환한다.', () => {
    mockRandoms([[30,1,8,43,22,11]]);
    const result = Lotto.getRandomUniqueLotteryNumbers();
    expect(result).toStrictEqual([1,8,11,22,30,43]);
  })

  test.each([
    [[1,2,3,4,5,6],1,2000000000],
    [[1,2,3,4,5,7],2,30000000],
    [[1,2,3,4,5,8],3,1500000],
    [[1,2,3,4,8,9],4,50000],
    [[1,2,3,8,9,10],5,5000],
    [[11,12,13,14,15,16],0,0],
  ])('로또 번호를 추첨한다.', (lottoNumber, exPrize, exMoney) => {
    const lotto = new Lotto(lottoNumber);
    const {prize, money} = lotto.getLottoResult([1,2,3,4,5,6],7);
    expect(prize).toBe(exPrize)
    expect(money).toBe(exMoney);
  })
});
