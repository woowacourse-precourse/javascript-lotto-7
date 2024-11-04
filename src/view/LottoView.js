import { getInput } from './view.js';
import { INPUT_MESSAGES } from '../constant/constant.js';

class LottoView {
  async getMoney() {
    return await getInput(INPUT_MESSAGES.MONEY);
  }
}

export default LottoView;
