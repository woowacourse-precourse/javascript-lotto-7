import { MissionUtils } from '@woowacourse/mission-utils';
import Input from '../src/utils/io/Input.js';

describe('Input 클래스 테스트', () => {
  beforeAll(() => {
    MissionUtils.Console.readLineAsync = jest.fn();
  });

  test('로또 구입 금액을 올바르게 입력받아 반환한다.', async () => {
    const input = '4000';

    MissionUtils.Console.readLineAsync.mockResolvedValueOnce(input);

    const result = await Input.get();

    expect(result).toBe(input);
  });

  test('당첨 번호를 올바르게 입력받아 반환한다.', async () => {
    const input = '1,2,3,4,5,6';

    MissionUtils.Console.readLineAsync.mockResolvedValueOnce(input);

    const result = await Input.get();

    expect(result).toBe(input);
  });

  test('보너스 번호를 올바르게 입력받아 반환한다.', async () => {
    const input = '7';

    MissionUtils.Console.readLineAsync.mockResolvedValueOnce(input);

    const result = await Input.get();

    expect(result).toBe(input);
  });
});
