class LottoResult {
  #results;

  constructor() {
    // 당첨 결과 초기화
    // 각 등수(3개 일치부터 6개 일치까지)에 대해 개수를 0으로 초기화
    this.#results = {
      match3: 0,           
      match4: 0,            
      match5: 0,            
      match5PlusBonus: 0,   
      match6: 0,            
    };
  }

  // 당첨 결과 업데이트
  updateResult(rank) {
    if (rank in this.#results) {
      this.#results[rank]++;
    }
  }

  // 당첨 결과 반환
  getResults() {
    return this.#results;
  }
}

export default LottoResult;
