class App {
  async run() {
    const inputMoney = 8000; // 가정
    const lottoList = LottoGenerator(inputMoney);
    printGeneratedList(lottoList);
    const winningNumbers = [1, 2, 3, 4, 5, 6]; // 가정
    const bonusNumber = [7]; // 가정
    const resultCalculator = new LottoResultCalculator(
      winningNumbers,
      bonusNumber,
    );
  }
}

export default App;
