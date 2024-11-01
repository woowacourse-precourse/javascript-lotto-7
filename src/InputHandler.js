import { MissionUtils } from '@woowacourse/mission-utils';

class InputHandler {
  async getMoney(callback) {
    const num =
      await MissionUtils.Console.readLineAsync('구입금액을 입력해주세요.');
    callback(num); // 입력 값을 콜백 함수로 전달
  }
}
export default InputHandler;
