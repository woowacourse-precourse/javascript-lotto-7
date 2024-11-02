import LottoGenerator from "./LottoGenerator.js"

export default class LottoPurchaser {
    #purchasePrice
    #lottoResult
    #lottos

    purchase(purchasePrice){
        // TODO : 생성자 코드 수정 고려해보기
        const lottoGenerator = new LottoGenerator();

        this.#lottos = lottoGenerator.generate(purchasePrice)
    }
}
