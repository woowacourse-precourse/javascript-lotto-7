import outputView from '../../src/views/outputView';
import { Console } from '@woowacourse/mission-utils';

describe('outputView 테스트', () => {
  beforeEach(() => {
    jest.spyOn(Console, 'print').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('displayEmptyLine가 빈 줄을 출력하는지 테스트', () => {
    outputView.displayEmptyLine();
    expect(Console.print).toHaveBeenCalledWith('');
  });
});
