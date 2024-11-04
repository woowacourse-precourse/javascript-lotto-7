// __tests__/RandomNumber.test.js

import RandomNumber from '../src/lotto/RandomNumber.js';
import { magicNumber } from '../src/constants/index.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { OutputView } from '../src/views/OutputView.js';

// MissionUtils와 OutputView를 모킹합니다.
jest.mock('@woowacourse/mission-utils', () => ({
  MissionUtils: {
    Random: {
      pickUniqueNumbersInRange: jest.fn(),
    },
  },
}));

jest.mock('../src/views/OutputView.js', () => ({
  OutputView: jest.fn(), // 명명된 익스포트로 모킹 수정
}));

describe('RandomNumber 클래스 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('랜덤 번호 생성 시', () => {
    test('지정된 횟수만큼 랜덤 번호를 생성하고, 각 번호는 유니크하며 정렬되어 있다', () => {
      const cnt = 3;
      const mockNumbers = [
        [3, 15, 22, 28, 35, 42],
        [1, 5, 12, 19, 33, 44],
        [7, 14, 21, 29, 37, 45],
      ];

      // pickUniqueNumbersInRange가 호출될 때마다 mockNumbers의 각 배열을 반환하도록 설정
      MissionUtils.Random.pickUniqueNumbersInRange
        .mockReturnValueOnce(mockNumbers[0])
        .mockReturnValueOnce(mockNumbers[1])
        .mockReturnValueOnce(mockNumbers[2]);

      const randomNumber = new RandomNumber(cnt);
      const generatedNumbers = randomNumber.getRandomNumber();

      expect(
        MissionUtils.Random.pickUniqueNumbersInRange,
      ).toHaveBeenCalledTimes(cnt);
      expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledWith(
        magicNumber.START_RANGE,
        magicNumber.END_RANGE,
        magicNumber.RANDOM_NUMBER_CNT,
      );

      expect(generatedNumbers).toEqual(mockNumbers);
    });
  });

  describe('랜덤 번호 반환 시', () => {
    test('getRandomNumber() 메서드가 올바른 랜덤 번호를 반환한다', () => {
      const cnt = 2;
      const mockNumbers = [
        [2, 9, 17, 23, 34, 41],
        [4, 11, 19, 27, 38, 43],
      ];

      MissionUtils.Random.pickUniqueNumbersInRange
        .mockReturnValueOnce(mockNumbers[0])
        .mockReturnValueOnce(mockNumbers[1]);

      const randomNumber = new RandomNumber(cnt);
      const returnedNumbers = randomNumber.getRandomNumber();

      expect(returnedNumbers).toEqual(mockNumbers);
    });
  });

  describe('랜덤 번호 출력 시', () => {
    test('printRandomNumber() 메서드가 올바른 형식으로 출력한다', () => {
      const cnt = 2;
      const mockNumbers = [
        [5, 12, 19, 26, 33, 40],
        [3, 8, 14, 21, 28, 35],
      ];

      MissionUtils.Random.pickUniqueNumbersInRange
        .mockReturnValueOnce(mockNumbers[0])
        .mockReturnValueOnce(mockNumbers[1]);

      const randomNumber = new RandomNumber(cnt);
      randomNumber.printRandomNumber();

      // 각 랜덤 번호 배열을 문자열로 변환한 후 OutputView가 호출되었는지 확인
      expect(OutputView).toHaveBeenCalledTimes(cnt + 1); // 각 번호와 마지막에 \n

      mockNumbers.forEach((numbers, idx) => {
        const numberStr = `[${numbers.join(', ')}]`;
        expect(OutputView).toHaveBeenNthCalledWith(idx + 1, numberStr);
      });

      // 마지막 호출은 '\n'이어야 함
      expect(OutputView).toHaveBeenLastCalledWith('\n');
    });
  });
});
