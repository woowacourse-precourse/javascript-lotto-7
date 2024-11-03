import * as Console from 'node:console';

export class Calculate {
  #lottoList;
  #winningLotto;
  #bonusNumber;

  constructor(lottoList, winningLotto, bonusNumber) {
    this.#lottoList = lottoList;
    this.#winningLotto = winningLotto;
    this.#bonusNumber = bonusNumber;
  }

  #initializeResults() {
    return {
      first: { count: 0, prize: 2000000000, match: 6, message: '6개 일치' },
      second: {
        count: 0,
        prize: 30000000,
        match: 5,
        message: '5개 일치, 보너스 볼 일치',
      },
      third: { count: 0, prize: 1500000, match: 5, message: '5개 일치' },
      fourth: { count: 0, prize: 50000, match: 4, message: '4개 일치' },
      fifth: { count: 0, prize: 5000, match: 3, message: '3개 일치' },
    };
  }

  printResults() {
    const results = this.#initializeResults();
    Console.print(results);
  }
}
