import { Console } from '@woowacourse/mission-utils';
import Lotto from './../Lotto'

class GetInput {
  static async print() {
    const numbers = await Console.readLineAsync("당첨 번호를 입력해 주세요. \n");
    const winningNumbers = numbers.split(",").map((number) => parseInt(number).trim());

    try {
      const lotto = new Lotto(winningNumbers); // Lotto 클래스의 인스턴스를 생성합니다.
      const bonusNumber = await Console.readLineAsync("\n보너스 번호를 입력해 주세요. \n");
      const bonus = parseInt(bonusNumber);

      return { lotto, bonus }; // lotto 객체와 보너스 번호를 반환합니다.
    }
    catch (error) {
      console.error(error.message); // 유효하지 않은 입력에 대한 에러 메시지를 출력합니다.
      return null; // 또는 에러 처리를 추가하여 사용자에게 다시 입력을 요청할 수 있습니다.
    }
  }
}

export default GetInput;
