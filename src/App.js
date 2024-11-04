class App {
  #lottoController = new LottoController();

  async run() {
    await this.#lottoController.gameStart();
  }
}

export default App;
