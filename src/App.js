class App {
  useLotteryMachine = new LotteryMachine()
  async run() {
    await this.useLotteryMachine.start()
  }
}

export default App;
