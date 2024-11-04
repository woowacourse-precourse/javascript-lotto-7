//메시지에 오류 없는강?

import { LOTTOS_SYSTEM_INPUT, PRICE_PROMPT, RESULT_PROMPT } from '../src/Prompt';

describe('Prompt 메시지 생성 테스트', () => {
  test('LOTTOS_SYSTEM_INPUT 메시지 검증', () => {
    expect(LOTTOS_SYSTEM_INPUT.LOTTO_PRICE).toBe("구입금액을 입력해 주세요.");
    expect(LOTTOS_SYSTEM_INPUT.NUMBER_INPUT).toBe("당첨 번호를 입력해 주세요.");
    expect(LOTTOS_SYSTEM_INPUT.ADD_NUMBER_INPUT).toBe("보너스 번호를 입력해 주세요.");
  });

  test('PRICE_PROMPT 메시지 생성', () => {
    expect(PRICE_PROMPT.getPriceResultPrompt(5)).toBe("5개를 구매했습니다.");
  });

  test('RESULT_PROMPT 메시지 생성', () => {
    expect(RESULT_PROMPT.MATCH_3(1)).toBe("3개 일치 (5,000원) - 1개");
    expect(RESULT_PROMPT.MATCH_4(2)).toBe("4개 일치 (50,000원) - 2개");
    expect(RESULT_PROMPT.MATCH_5(1)).toBe("5개 일치 (1,500,000원) - 1개");
    expect(RESULT_PROMPT.MATCH_5_BONUS(0)).toBe("5개 일치, 보너스 볼 일치 (30,000,000원) - 0개");
    expect(RESULT_PROMPT.MATCH_6(1)).toBe("6개 일치 (2,000,000,000원) - 1개");
  });

  test('수익률 메시지 생성', () => {
    expect(RESULT_PROMPT.getEarningsRatePrompt(62.5)).toBe("총 수익률은 62.5%입니다.");
  });
});
