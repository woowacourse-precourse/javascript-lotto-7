import { Console, MissionUtils } from '@woowacourse/mission-utils';

export function purchaseAmountValidation(purchaseAmount) {
  if (!purchaseAmount.trim()) throw '구매금액은 1000단위의 숫자만 입력해주세요';
  if (isNaN(purchaseAmount)) throw '구매금액은 1000단위의 숫자만 입력해주세요';
  if (Number(purchaseAmount) % 1000)
    throw '구매금액을 1000 단위로 입력해주세요';
  let myLottos = [];

  for (let i = 0; i < Number(purchaseAmount) / 1000; i++) {
    const myLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    myLotto.sort((a, b) => a - b);
    myLottos.push(myLotto);
    Console.print(myLotto);
  }

  return myLottos;
}

export function winningLottoValidation(winningLottoInput) {
  if (!winningLottoInput.trim())
    throw '당첨 번호 6자리 숫자를 쉽표로 구분하여 입력해 주세요';
  const winningLottoArray = winningLottoInput.split(',');
  winningLottoArray.map((lottoNum) => {
    if (isNaN(lottoNum)) throw '당첨번호는 숫자만 입력해주세요';
    if (!lottoNumberValidation(lottoNum))
      throw '당첨번호는 1 ~ 45까지의 숫자만 가능합니다.';
  });
  if (winningLottoArray.length !== 6) throw '당첨번호는 6자리로 입력해주세요';
  const winningLottoDuplicateValid = new Set(winningLottoArray);
  if (winningLottoDuplicateValid.size !== 6) throw '번호는 중복될 수 없습니다.';
  return winningLottoArray.map(Number);
}

export function bonusLottoValidation(bonusLottoNum, winningLotto) {
  if (!lottoNumberValidation(bonusLottoNum))
    throw '로또 번호는 1 ~ 45까지의 숫자만 가능합니다.';
  if (winningLotto.find((lottoNum) => lottoNum === bonusLottoNum))
    throw '보너스 번호는 당첨번호와 중복될 수 없습니다.';
  return Number(bonusLottoNum);
}

function lottoNumberValidation(lottoNumber) {
  if (Number(lottoNumber) < 1 || Number(lottoNumber) > 45) return false;
  if (Number(lottoNumber) % 1) return false;
  return true;
}
