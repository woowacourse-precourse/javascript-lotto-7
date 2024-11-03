import Lotto from '../src/Lotto';
import Validation from '../src/Validation';
import Logic from '../src/Logic';
import Input from '../src/Input';
import { ErrorMessage } from '../src/Enum';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      if (!Validation.validateWinningNumbers('1,2,3,4,5,5')) {
        throw new Error(ErrorMessage.WIN_NUM_ERROR);
      }
    }).toThrow(ErrorMessage.WIN_NUM_ERROR);
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});
