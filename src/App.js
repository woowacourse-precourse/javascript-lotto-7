import Match from './modules/Match';

class App {
  async run() {
    const match = new Match();
    await match.getLottos();
    await match.getJackpot();
    match.resetRanks(); // 매 실행 시 rank를 초기화
    match.matchLottos();
    match.displayResult(); // 결과를 출력
  }
}

export default App;
