class LottoResult {
  #results;

  constructor() {
    // 당첨 결과 초기화
    // 각 등수(3개 일치부터 6개 일치까지)에 대해 개수를 0으로 초기화
    this.#results = {
      match3: 0,            // 3개 번호 일치
      match4: 0,            // 4개 번호 일치
      match5: 0,            // 5개 번호 일치
      match5PlusBonus: 0,   // 5개 번호 + 보너스 번호 일치
      match6: 0,            // 6개 번호 일치
    };
  }

  // 당첨 결과 업데이트
  // 주어진 등수(rank)에 해당하는 결과의 개수를 1 증가시킴
  updateResult(rank) {
    if (rank in this.#results) {
      this.#results[rank]++;
    }
  }

  // 당첨 결과 반환
  // 현재까지 기록된 당첨 결과를 객체 형태로 반환
  getResults() {
    return this.#results;
  }
}

export default LottoResult;
