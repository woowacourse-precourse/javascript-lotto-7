import parseWinningNumbers from '../src/utils/parsedWinningNumbers';

describe('유틸 함수 테스트', () => {
  test('번호는 쉼표(,)를 기준으로 구분하며 정수로 변환한다', () => {
    expect(parseWinningNumbers('1, 2 ,3, 4, 5')).toEqual([1, 2, 3, 4, 5]);
  });
});
