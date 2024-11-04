import { Console, Random } from "@woowacourse/mission-utils";

class GameUtils {
  static LOTTO_INFORMATION = [
    { rank: 5, targetCount: 3, prize: 5000 },
    { rank: 4, targetCount: 4, prize: 50000 },
    { rank: 3, targetCount: 5, prize: 1500000 },
    { rank: 2, targetCount: 5, hasBonus: true, prize: 30000000 },
    { rank: 1, targetCount: 6, prize: 2000000000 },
  ];

  static findInformation(rank) {
    return this.LOTTO_INFORMATION.find((info) => info.rank === rank);
  }

  static getRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  static async catchError(fnc) {
    while (true) {
      try {
        await fnc();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async read(message) {
    return await Console.readLineAsync(`${message}\n`);
  }

  static print(message) {
    Console.print(message);
  }

  static printBlank() {
    Console.print("");
  }
}

export default GameUtils;
