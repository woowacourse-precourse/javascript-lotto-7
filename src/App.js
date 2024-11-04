import LottoGame from "./LottoGame.js";
// 프로그램의 진입점이자 전체 흐름을 관리하는 역할
// 비동기 작업을 수행하기 위한 메서드
// run() 메서드는 프로그램의 메인 진입점. 이 메서드에서 로또 게임의 각 단계를 비동기로 처리한다.
class App {
  async run() {
    const game = new LottoGame();
    await game.start();
  }
}

export default App;
