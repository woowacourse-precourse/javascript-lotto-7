import { INPUT } from '../constants/Constants';

class MatchController {
  constructor() {}

  async setJackpot() {
    const jackpotNumber = await Console.readLineAsync(INPUT.JACKPOT);
  }
}

export default MatchController;
