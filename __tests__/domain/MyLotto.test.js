import MyLotto from "../../src/domain/MyLotto/MyLotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils");

describe("MyLotto 도메인 테스트", () => {
  const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      MissionUtils.Random.pickUniqueNumbersInRange,
    );
  };

  test("로또 번호가 정상적으로 생성된다", () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 6];
    mockRandoms([numbers]);

    // when
    const myLotto = MyLotto.create();

    // then
    expect(myLotto.numbers).toEqual(numbers);
  });
});
