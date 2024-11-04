import { Console } from '@woowacourse/mission-utils';

export const getPaidMoney = async () => {
    Console.print('구입금액을 입력해 주세요.');
    return Number(await Console.readLineAsync(''));
}

export const getLottoNumbers = async () => {
    Console.print('\n당첨 번호를 입력해 주세요.');
    const enteredNumbers = await Console.readLineAsync('');
    return enteredNumbers.split(',');
}

export const getBonusNumbers = async(numbers) => {
    Console.print('\n보너스 번호를 입력해주세요.');
    const bonusNumber = await Console.readLineAsync('');
    if(!(1<=bonusNumber && bonusNumber<=45)){
      throw new Error("[ERROR] 1부터 45 범위 내의 번호 1개를 입력해주세요.");
    }
    if(numbers.includes(bonusNumber)){
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
    return Number(bonusNumber);
  }