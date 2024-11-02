import UserModel from '../src/model/UserModel.js';
import { mockRandoms } from '../src/test/testUtil.js';

describe('UserModel 클래스 테스트', () => {
  const lottosNumberArray = [
    [6, 5, 4, 3, 2, 1],
    [8, 40, 31, 43, 5, 41],
    [3, 5, 11, 16, 32, 38],
    [7, 11, 16, 35, 36, 44],
  ];
  mockRandoms(lottosNumberArray);
  const price = 4000;
  const userModel = new UserModel(price);

  test('로또 생성 정보 가져오기', () => {
    const result = { lottoLength: 4, lottosNumberArray };

    expect(userModel.getLottosInformation()).toEqual(result);
  });

  test('정렬된 로또 번호 배열 가져오기', () => {
    const result = lottosNumberArray.map((lottoNumbers) =>
      lottoNumbers.sort((a, b) => a - b),
    );

    expect(userModel.getSortedLottosNumberArray()).toEqual(result);
  });

  test('수익률 가져오기', () => {
    const result = '100.0';
    expect(userModel.caculateRateOfReturn(4000)).toEqual(result);
  });
});
