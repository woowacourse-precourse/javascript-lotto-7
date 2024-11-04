// services/RandomNumberService.js
import { RandomNumber } from '../lotto/index.js';

class RandomNumberService {
  generateRandomNumbers(purchaseCnt) {
    const randomNumber = new RandomNumber(purchaseCnt);
    randomNumber.printRandomNumber();
    return randomNumber.getRandomNumber();
  }
}

export default RandomNumberService;
