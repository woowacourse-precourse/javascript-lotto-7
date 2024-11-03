import checkWinning from '../src/Utils/checkWinning.js';

// - 4. 로또 당첨 여부 확인

//   - 당첨번호(+보너스번호)가 주어졌을 때 로또 번호와 비교해 몇 등인지 판단

describe('당첨 체크 함수 테스트', () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const lottoNumbers = [
    { basicNumbers: [7, 8, 9, 10, 11, 12], bonusNumber: 13 },
    { basicNumbers: [1, 8, 9, 10, 11, 12], bonusNumber: 13 },
    { basicNumbers: [1, 2, 9, 10, 11, 12], bonusNumber: 13 },
    { basicNumbers: [1, 2, 3, 10, 11, 12], bonusNumber: 13 },
    { basicNumbers: [1, 2, 3, 4, 11, 12], bonusNumber: 13 },
    { basicNumbers: [1, 2, 3, 4, 5, 12], bonusNumber: 13 },
    { basicNumbers: [1, 2, 3, 4, 5, 12], bonusNumber: 6 },
    { basicNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 13 },
  ];

  test('하나도 맞추지 못했다면 실패입니다.', () => {
    const { basicNumbers, bonusNumber } = lottoNumbers[0];
    expect(checkWinning(numbers, basicNumbers, bonusNumber)).toBe('miss');
  });

  test('하나만 맞췄다면 실패입니다.', () => {
    const { basicNumbers, bonusNumber } = lottoNumbers[1];
    expect(checkWinning(numbers, basicNumbers, bonusNumber)).toBe('miss');
  });

  test('두 개를 맞췄다면 실패입니다.', () => {
    const { basicNumbers, bonusNumber } = lottoNumbers[2];
    expect(checkWinning(numbers, basicNumbers, bonusNumber)).toBe('miss');
  });

  test('세 개를 맞췄다면 5등입니다.', () => {
    const { basicNumbers, bonusNumber } = lottoNumbers[3];
    expect(checkWinning(numbers, basicNumbers, bonusNumber)).toBe('fifth');
  });

  test('네 개를 맞췄다면 4등입니다.', () => {
    const { basicNumbers, bonusNumber } = lottoNumbers[4];
    expect(checkWinning(numbers, basicNumbers, bonusNumber)).toBe('fourth');
  });

  test('다섯 개를 맞췄지만 보너스 점수를 맞추지 못했다면 3등입니다.', () => {
    const { basicNumbers, bonusNumber } = lottoNumbers[5];
    expect(checkWinning(numbers, basicNumbers, bonusNumber)).toBe('third');
  });

  test('다섯 개를 맞추고 보너스 점수를 맞추면 2등입니다.', () => {
    const { basicNumbers, bonusNumber } = lottoNumbers[6];
    expect(checkWinning(numbers, basicNumbers, bonusNumber)).toBe('second');
  });

  test('여섯 개를 맞췄다면 1등입니다.', () => {
    const { basicNumbers, bonusNumber } = lottoNumbers[7];
    expect(checkWinning(numbers, basicNumbers, bonusNumber)).toBe('first');
  });
});
