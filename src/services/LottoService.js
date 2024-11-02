import LottoGenerator from '../models/LottoGenerator.js';
import LottoResult from '../models/LottoResult.js';

export default class LottoService {
  #lottoResult;
  #lottos;
  #winningLotto;
  #lottoGenerator;
  #LOTTO_PRICE = 1000;

  constructor() {
    this.#lottoGenerator = new LottoGenerator();
    this.#lottos=[]
  }

  // 로또 구매하기
  purchaseLottos(price) {
    this.#lottoResult = new LottoResult(price);
    
  }

  generateLottos(price){
    const lottoCount = price / this.#LOTTO_PRICE;
    
    for(let i=0;i<lottoCount;i++){
        const lotto = this.#lottoGenerator.generate()
        this.#lottos.push(lotto)
    }
  }
}
