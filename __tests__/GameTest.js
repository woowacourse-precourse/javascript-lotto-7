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

  test("실패 케이스: 7500원을 입력하면 에러가 발생한다.", () => {
    expect(() => {
      game.purchaseLotto(7500);
    }).toThrow("[ERROR]");
  });
});
