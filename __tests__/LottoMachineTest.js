import Lotto from "../src/Lotto.js";
import LottoMachine from "../src/lottoMachine.js";

describe('로또 발매기 테스트', () => {
  test('stringToNumbers는 입력 받은 문자열을 숫자 배열로 변환한다.', () => {
    expect(LottoMachine.stringToNumbers("1,2,3,4,5,7")).toEqual([1, 2, 3, 4, 5, 7])
  });

  test('getLotto는 Lotto의 인스턴스로 구성된 배열을 생성한다.', () => {
    LottoMachine.getLotto();
    expect(LottoMachine.lottoList.every(lotto => lotto instanceof Lotto)).toEqual(true);
  });

  test('getLotto는 quantity개의 요소로 이루어진 배열을 생성한다.', () => {
    LottoMachine.quantity = 3;
    LottoMachine.getLotto();
    expect(LottoMachine.lottoList.length).toEqual(3);
  });

  test('sortLotto는 로또 번호를 오름차순으로 정렬한다.', () => {
    LottoMachine.lottoList = [new Lotto([6, 5, 4, 3, 2, 1])];
    LottoMachine.sortLotto();
    expect(LottoMachine.lottoList[0].getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('countScore는 로또 번호가 당첨 번호와 얼마나 일치하는지 확인한다.', () => {
    const testLotto = new Lotto([11, 12, 13, 14, 15, 16]);
    LottoMachine.winningNumbers = new Lotto([11, 2, 13, 14, 15, 16]);
    LottoMachine.bonusNumber = 12;
    LottoMachine.countScore(testLotto);
    expect(LottoMachine.score.FIVE_BONUS_MATCHES).toEqual(1);
  });

  test('getResult는 발급한 여러 로또의 당첨을 확인한다.', () => {
    LottoMachine.lottoList = [new Lotto([21, 22, 23, 34, 35, 36]), new Lotto([31, 32, 33, 24, 25, 26])];
    LottoMachine.winningNumbers = new Lotto([21, 22, 23, 24, 25, 26]);
    LottoMachine.getResult();
    expect(LottoMachine.score.THREE_MATCHES).toEqual(2);
  });

  test('countProfit은 수익률을 계산한다.', () => {
    LottoMachine.score = {
      THREE_MATCHES: 1,
      FOUR_MATCHES: 0,
      FIVE_MATCHES: 0,
      FIVE_BONUS_MATCHES: 0,
      SIX_MATCHES: 0,
    };
    LottoMachine.quantity = 10;
    LottoMachine.countProfit();
    expect(LottoMachine.profit).toEqual(50);  // 만 원을 지불하고 오천 원을 받아서 수익률은 50%이다.
  });
});
