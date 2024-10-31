import { PRICE_RANGE } from '../src/constant/system.js';
import UserModel from '../src/model/UserModel.js';

describe('UserModel 클래스 테스트', () => {
  test('로또 생성', () => {
    const price = 4000;
    const userModel = new UserModel(price);

    userModel.createLotto([1, 2, 3, 4, 5, 6]);
    userModel.createLotto([1, 2, 3, 4, 5, 7]);
    userModel.createLotto([1, 2, 3, 4, 5, 8]);
    userModel.createLotto([1, 2, 3, 4, 5, 9]);

    expect(userModel.getPrice()).toEqual(price);
    expect(userModel.getLottos().length).toEqual(price / PRICE_RANGE.MIN);
  });
});
