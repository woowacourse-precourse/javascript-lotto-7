import { Console } from '@woowacourse/mission-utils';

export const printResult = (gradeArr, price) => {
  Console.print('\n당첨 통계');
  Console.print('---');

  Console.print('3개 일치 (5,000원) - ' + gradeArr[5] + '개');
  Console.print('4개 일치 (50,000원) - ' + gradeArr[4] + '개');
  Console.print('5개 일치 (1,500,000원) - ' + gradeArr[3] + '개');
  Console.print(
    '5개 일치, 보너스 볼 일치 (30,000,000원) - ' + gradeArr[2] + '개'
  );
  Console.print('6개 일치 (2,000,000,000원) - ' + gradeArr[1] + '개');
  Console.print('총 수익률은 ' + getRateOfReturn(gradeArr, price) + '%입니다.');
};

const getRateOfReturn = (gradeArr, price) => {
  const totalProfit =
    gradeArr[1] * 2000000000 +
    gradeArr[2] * 30000000 +
    gradeArr[3] * 1500000 +
    gradeArr[4] * 50000 +
    gradeArr[5] * 5000;

  const rateOfReturn = Number(
    ((totalProfit / price) * 100).toFixed(2)
  ).toLocaleString('ko-KR');

  return rateOfReturn;
};
