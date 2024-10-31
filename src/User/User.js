import { Console } from '@woowacourse/mission-utils';

class User {
  async readUserInput(message) {
    return Console.readLineAsync(message);
  }
}

export default User;
