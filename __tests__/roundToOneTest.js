import roundToOne from '../src/Utils/roundToOne.js';

// - 5. 당첨 통계 계산

//   - 소수점 둘째 자리에서 반올림

describe('반올림 함수 테스트', () => {
  test('정수를 함수에 넣으면 소수점 첫 째자리까지 보여야 합니다.', () => {
    expect(roundToOne(100)).toStrictEqual('100.0');
  });

  test('소수를 함수에 넣으면 소수점 둘 째자리에서 반올림합니다.', () => {
    expect(roundToOne(50.55)).toStrictEqual('50.6');
  });

  test('소수를 함수에 넣으면 소수점 둘 째자리에서 반올림합니다.', () => {
    expect(roundToOne(50.54)).toStrictEqual('50.5');
  });

  test('부동소수점 오류를 조금 보정합니다.', () => {
    expect(roundToOne(1.005)).toStrictEqual('1.0');
  });
});
