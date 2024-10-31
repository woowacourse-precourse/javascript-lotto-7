import Lotto from "./Lotto.js"

const makeLotto = (lottoNum) => {
<<<<<<< HEAD
    const newLotto = new Lotto(lottoNum.sort((a, b) => a - b)); // lottoNum을 토대로 새 객체 생성
=======
    const newLotto = new Lotto(lottoNum); // lottoNum을 토대로 새 객체 생성
>>>>>>> b9f39fae3ffa067cd05ffa695bc0e42e4bd7f775
    return newLotto;
}

export default makeLotto;