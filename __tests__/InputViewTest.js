import { MissionUtils } from '@woowacourse/mission-utils';

import { getUserMoney } from '../src/ui/InputView';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('사용자 입력 테스트하기', () => {
  describe('구입금액 입력받기', () => {
    test('정상적으로 구입금액을 반환한다', async () => {
      const inputs = ['1000'];
      mockQuestions(inputs);

      const userMoney = await getUserMoney();
      expect(userMoney).toBe('1000');
    });
  });
});
