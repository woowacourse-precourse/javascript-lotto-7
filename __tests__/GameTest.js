// gameTest.js
import Game from "../src/Game";

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