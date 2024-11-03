import Lotto from '../src/Lotto.js';
import { ERROR_MESSAGES } from '../src/constants/messages.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test.each([['1;2;3;4;5;6'], ['1;2 2;3;4;5;6']])(
    '숫자와 콤마 외의 값이 입력되어선 안된다. - [%s]',
    (numbers) => {
      expect(() => {
        const lottoNumbers = numbers.split(',').map(Number);
        new Lotto(lottoNumbers);
      }).toThrow(`${ERROR_MESSAGES.invalid_lotto_input}`);
    },
  );

  test.each([[' '], ['1, 2, 3, 4, 5'], ['1, 2, 3, 4, 5, 6, 7']])(
    '당첨 번호 개수는 6개 보다 모자라거나 초과해선 안된다. - [%s]',
    (numbers) => {
      expect(() => {
        const lottoNumbers = numbers.split(',').map(Number);
        new Lotto(lottoNumbers);
      }).toThrow(`${ERROR_MESSAGES.invalid_lotto_length}`);
    },
  );

  test.each([
    ['0,1,2,3,4,5'],
    ['-1,2,3,4,5,6'],
    ['1,2,3,4,5,46'],
    ['1,,2,3,4,5'],
  ])('당첨 번호에 1~45 외의 숫자가 포함되어선 안된다. - [%s]', (numbers) => {
    expect(() => {
      const lottoNumbers = numbers.split(',').map(Number);
      new Lotto(lottoNumbers);
    }).toThrow(`${ERROR_MESSAGES.invalid_lotto_range}`);
  });

  test.each([
    ['0,1,2,3,4,5'],
    ['-1,2,3,4,5,6'],
    ['1,2,3,4,5,46'],
    ['1,,2,3,4,5'],
  ])('당첨 번호에 1~45 외의 숫자가 포함되어선 안된다. - [%s]', (numbers) => {
    expect(() => {
      const lottoNumbers = numbers.split(',').map(Number);
      new Lotto(lottoNumbers);
    }).toThrow(`${ERROR_MESSAGES.invalid_lotto_range}`);
  });
});
