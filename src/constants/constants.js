import { Console } from '@woowacourse/mission-utils';

export const INPUT_MESSAGE = {
  INPUT_AMOUNT_MESSAGE: '구입금액을 입력해 주세요.\n',
};

export const LOTTO_MESSAGE = {
  LOTTO_NUMBER_ERROR_MESSAGE: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_WINNING_NUMBER_MESSAGE: '당첨 번호를 입력해 주세요.\n',
  LOTTO_BONUS_WINNING_NUMBER_MESSAGE: '보너스 번호를 입력해 주세요.\n',
  LOTTO_RESULT_MESSAGE: '당첨통계\n---',
};
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 45;
export const NUMBER_OF_LOTTO_NUMBERS = 6;
export const LOTTO_PRICE = 1000;

export const THREE_PRICE = 5000;
export const FOUR_PRICE = 50000;
export const FIVE_PRICE = 1500000;
export const BONUS_PRICE = 30000000;
export const SIX_PRICE = 2000000000;

export function howManyCorrectResult(howMany, price, count) {
  function addCommas(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  Console.print(`${howMany}개 일치 (${addCommas(price)}원) - ${count}개`);
}

export function BonusCorrectResult(howMany, price, count) {
  function addCommas(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  Console.print(
    `${howMany}개 일치, 보너스 볼 일치(${addCommas(price)}원) - ${count}개`,
  );
}
