import Util from '../src/Util';

describe('유틸 클래스 테스트', () => {
  test('타겟 값에 해당되는 배열의 원소들만 필터링되는지 확인하는 기능 테스트', () => {
    const ARRAY = [1, 2, 3, 4, 5];
    const TARGET = 3;
    const FILTERED_ARRAY = [3];

    expect(Util.filterByTargetMatch(ARRAY, TARGET)).toEqual(FILTERED_ARRAY);
  });

  test('타겟 배열에 해당되는 배열의 원소들만 필터링되는지 확인하는 기능 테스트', () => {
    const ARRAY = [1, 2, 3, 4, 5];
    const TARGET_ARRAY = [1, 3];
    const FILTERED_ARRAY = [1, 3];

    expect(Util.filterByTargetArrayMatch(ARRAY, TARGET_ARRAY)).toEqual(FILTERED_ARRAY);
  });
});
