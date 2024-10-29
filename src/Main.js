import { Console, Random } from '@woowacourse/mission-utils';

const MESSAGES = {
  INFO: {
    PURCHASE_AMOUNT: '구입 금액을 입력해주세요.',
    WINNING_NUMBERS: '당첨 번호를 입력해주세요.',
    BONUS_NUMBER: '보너스 번호를 입력해주세요.',
  },
};

const Main = async () => {
  Console.print('프로그램 시작!');

  const purchaseAmount = await Console.readLineAsync(
    MESSAGES.INFO.PURCHASE_AMOUNT,
  );
  const winningNumbers = await Console.readLineAsync(
    MESSAGES.INFO.WINNING_NUMBERS,
  );
  const bonusNumber = await Console.readLineAsync(MESSAGES.INFO.BONUS_NUMBER);
};

export default Main;
