import Lotto from "./Lotto.js"

const makeLotto = (lottoNum) => {
    const newLotto = new Lotto(lottoNum); // lottoNum을 토대로 새 객체 생성
    return newLotto;
}

export default makeLotto;