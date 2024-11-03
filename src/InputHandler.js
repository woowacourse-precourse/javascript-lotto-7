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