import { INPUT } from '../constants/Constants.js';

class MatchController {
  constructor() {}

  async setBonusJackpot() {
    const bonusNumber = await Console.readLineAsync(INPUT.BONUS);
    return bonusNumber;
  }
}

export default MatchController;
