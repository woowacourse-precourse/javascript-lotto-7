import { LOTTO_TEMPLATE } from '../src/constants/lottoResults.js';

describe('LOTTO_PRIZE 상수를 참조하는 LOTTO_TEMPLATE 테스트', () => {
  test('LOTTO_TEMPLATE.fifth 메시지가 LOTTO_PRIZE 값으로 올바르게 설정되어야 한다', () => {
    const expectedMessage = '3개 일치 (5,000원) - {count}개';
    expect(LOTTO_TEMPLATE.fifth).toBe(expectedMessage);
  });

  test('LOTTO_TEMPLATE.fourth 메시지가 LOTTO_PRIZE 값으로 올바르게 설정되어야 한다', () => {
    const expectedMessage = '4개 일치 (50,000원) - {count}개';
    expect(LOTTO_TEMPLATE.fourth).toBe(expectedMessage);
  });

  test('LOTTO_TEMPLATE.third 메시지가 LOTTO_PRIZE 값으로 올바르게 설정되어야 한다', () => {
    const expectedMessage = '5개 일치 (1,500,000원) - {count}개';
    expect(LOTTO_TEMPLATE.third).toBe(expectedMessage);
  });

  test('LOTTO_TEMPLATE.second 메시지가 LOTTO_PRIZE 값으로 올바르게 설정되어야 한다', () => {
    const expectedMessage =
      '5개 일치, 보너스 볼 일치 (30,000,000원) - {count}개';
    expect(LOTTO_TEMPLATE.second).toBe(expectedMessage);
  });

  test('LOTTO_TEMPLATE.first 메시지가 LOTTO_PRIZE 값으로 올바르게 설정되어야 한다', () => {
    const expectedMessage = '6개 일치 (2,000,000,000원) - {count}개';
    expect(LOTTO_TEMPLATE.first).toBe(expectedMessage);
  });
});
