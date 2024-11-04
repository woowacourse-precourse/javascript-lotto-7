class App {
  async run() {
    const amount = await this.promptPurchaseAmount();
    const count = amount / 1000;
    Console.print(`${count}개를 구매했습니다.`);
  }

  async promptPurchaseAmount() {
    try {
      const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      const amount = Number(input);
      if (!Number.isInteger(amount) || amount % 1000 !== 0 || amount <= 0) {
        throw new Error("[ERROR] 구입 금액은 1,000원 단위의 양의 정수여야 합니다.");
      }
      return amount;
    } catch (error) {
      Console.print(error.message);
      return this.promptPurchaseAmount();
    }
  }
}

export default App;
