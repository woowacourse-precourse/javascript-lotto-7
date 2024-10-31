import { Random } from '@woowacourse/mission-utils'

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  generateLotto(lottoAmount){
    const purchasedLotto = [];
    for(let i = 0 ; i < lottoAmount; i++){
      const sortedNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      purchasedLotto.push(sortedNumbers);
    }
    return purchasedLotto;
  }

  isEqual(numbers)
  {
    if(JSON.stringify(numbers) === JSON.stringify(this.#numbers)){
      return true;
    }
    return false;
  }
}


export default Lotto;
