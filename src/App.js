class App {
  static PRIZE_INFO = {
    fifth: { matchCount: 3, prize: 5000, message: "3개 일치 (5,000원) - " },
    fourth: { matchCount: 4, prize: 50000, message: "4개 일치 (50,000원) - " },
    third: { matchCount: 5, prize: 1500000, message: "5개 일치 (1,500,000원) - " },
    second: {
      matchCount: 5,
      prize: 30000000,
      message: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
      bonus: true,
    },
    first: { matchCount: 6, prize: 2000000000, message: "6개 일치 (2,000,000,000원) - " },
  };

  async run() {}
}

export default App;
