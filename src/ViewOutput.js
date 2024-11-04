import { Console } from '@woowacourse/mission-utils';

export default class ViweOutput {

    static printText(content) {
        Console.print(content);
    }
    
    static printLottoList(LottoList) {
        LottoList.forEach(lotto => {
            Console.print(lotto);
        });
    }
}