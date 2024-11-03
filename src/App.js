class App {
  async run() {
    const inputMoney = 8000; // 가정
    const lottoList = LottoGenerator(inputMoney);
    printGeneratedList(lottoList);
  }
}

export default App;
