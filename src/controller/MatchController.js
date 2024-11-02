import { INPUT } from '../constants/Constants.js';

class MatchController {
  constructor() {}

  async setJackpot() {
    const jackpotNumber = await Console.readLineAsync(INPUT.JACKPOT);
    const jackpotArray = jackpotNumber.split(',');
    return jackpotArray;
  }

  async setBonusJackpot() {
    const bonusNumber = await Console.readLineAsync(INPUT.BONUS);
    return bonusNumber;
  }
}

export default MatchController;
