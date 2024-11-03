// gameTest.js
import Game from "../src/core/Game";
import Lotto from "../src/lotto/Lotto.js";

describe("Game 클래스 - purchaseLotto 메서드", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test("성공 케이스: 8000원을 입력하면 티켓 개수로 8을 반환한다.", () => {
    const ticketCount = game.purchaseLotto(8000);
    expect(ticketCount).toBe(8);
  });

});


describe ("Game 클래스 - generateLotto 메서드", () =>{
    let game;

    beforeEach(() =>{
        game = new Game();
    });

    test("성공 케이스: 오름차순으로 정렬된 6개의 숫자 배열을 입력받은 개수만큼 가지는 배열인지 확인",() =>{
        expect(() => {
            const lotto = game.generateLotto(8);

            expect(lotto).toHaveLength(8);

            lotto.forEach(eachLotto => {
                expect(eachLotto).toHaveLength(6); // 각 배열에 6개의 숫자가 있는지 확인
                expect(eachLotto).toEqual([...eachLotto].sort((a, b) => a - b)); // 오름차순 여부 확인
            });
          });
    });

});

describe ("Game 클래스 - calculateProfit 메서드", () =>{
  let game;

  beforeEach(() =>{
      game = new Game();
  });

  test("성공 케이스: 각 등수가 1명씩 존재할 때 상금 값 100 정상적으로 반환 테스트",() =>{

  let totalPrize = 0;
  const lottoResult = [Array(7).fill(1), [1]];
  const paidMoney = 2_031_555_000;
  totalPrize = game.calculateProfit(lottoResult, paidMoney);

  expect(totalPrize).toBe(100.0);

  });

});


describe ("Game 클래스 - checkLottoResult 메서드", () =>{
  let game;

  beforeEach(() =>{
      game = new Game();
  });

  test.each([
    // [lotto numbers, expected]
    [[8, 21, 23, 41, 42, 43], [[1, 0, 0, 0, 0, 0, 0], [0]]],
    [[3, 5, 11, 16, 32, 38], [[0, 0, 1, 0, 0, 0, 0], [0]]],
    [[7, 11, 16, 35, 36, 44], [[1, 0, 0, 0, 0, 0, 0], [0]]],
    [[1, 8, 11, 31, 41, 42], [[0, 1, 0, 0, 0, 0, 0], [0]]],
    [[13, 14, 16, 38, 42, 45], [[1, 0, 0, 0, 0, 0, 0], [0]]],
    [[7, 11, 30, 40, 42, 43], [[1, 0, 0, 0, 0, 0, 0], [0]]],
    [[2, 13, 22, 32, 38, 45], [[0, 1, 0, 0, 0, 0, 0], [0]]],
    [[1, 3, 5, 14, 22, 45], [[0, 0, 0, 1, 0, 0, 0], [0]]],
])(
  "checkLottoResult 테스트 입력받은 로또 %p 기대결과 %j ",
  (lottoNumbers, expected) => {
      const lotto = new Lotto(lottoNumbers);
      const winningNumber = [1,2,3,4,5,6]
      const bonusNumber = 7;
      let lottoResult = [Array(7).fill(0), [0]];


      lottoResult = game.checkLottoResult([lotto], winningNumber, bonusNumber);
      

      expect(lottoResult).toEqual(expected);
  }
  );

});