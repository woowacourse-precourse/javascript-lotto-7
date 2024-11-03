import { Console, Random } from "@woowacourse/mission-utils";

class IOHandler {
  constructor() {}

  // 입력받아 ,로 잘라 문자 배열로 넘겨주는 함수
  async getInput(message) {
    try {
      const Input = await Console.readLineAsync(`${message}\n`);
      return Input.split(",");
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default IOHandler;
