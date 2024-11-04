# javascript-lotto-precourse

# 💸 **로또** 💸

## **기능 요구 사항**

간단한 로또 발매기를 구현한다.

- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원
- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

### **입출력 요구 사항**

### **입력**

- 로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.

```
14000

```

- 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.

```
1,2,3,4,5,6

```

- 보너스 번호를 입력 받는다.

```
7

```

### **출력**

- 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.

```prolog
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

```

- 당첨 내역을 출력한다.

```
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개

```

- 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

```erlang
총 수익률은 62.5%입니다.

```

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

```prolog
[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.

```

### **실행 결과 예시**

```prolog
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```
---
# ✨ 폴더구조
![image](https://github.com/user-attachments/assets/45dc57bc-3239-4124-905e-41bd7d99b829)


# ✅ 기능 정리

1. **로또 클래스 수정하기**

   - numbers가 private이기 때문에, 아래 부분에 getter setter 생성

   ```jsx
     // TODO: 추가 기능 구현
       get numbers() {
           return this.#numbers;
       }

       set numbers(numbers) {
           // distance : number
           this.#numbers= numbers;
       }
   }

   ```

2. **로또 구입을 위한 입력받기**

   1. 로또 구입 금액 `lottoBuyMoneyInput` 을 입력받는다.

3. **로또 발행하기 [`LottoMake.js`]**

   1. 로또 구입 금액`lottoBuyMoneyInput`에 맞춰서, 1000으로 나눠서 몫(`LottoBuyCount`)만큼 로또를 발행한다. (2차원 배열)

      1. 로또 구입 금액 / 1000 몫 = LottoCount 구하기 (`getLottoBuyCount`(`lottoBuyMoneyInput`)
      2. **8개를 구매했습니다. 출력 `printLottoBuyCount(lottoBuyCount)`**
      3. 로또 전체 배열을 한개 만든다. (`LottoArray`[] )
      4. 로또 개수만큼 반복한다. `LottoArray = makeLottoArray (LottoBuyCont)`

         1. 로또 한장을 만든다. `makeLotto()`

            1. 1 ~ 45 사이의 랜덤한 6자리 번호를 뽑는다. `getRandomLottoNumbers()` = `MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);`

               `lottoNumbers = getRandomLottoNumbers`()

               → 6개 번호를 가진 로또 완성 리턴 [ 1,2,3,4,5,6]

            2. 로또 객체로 만든다. `new Lotto(new Lotto([1,2,3,4,5,6]);` ⇒ 즉 new Lotto(lottoNumbers)

         2. `LottoArray`에 만들어진 `lottoNumbers` 로또 한장을 `push`한다.

**3. 당첨 번호 및 보너스 번호 입력받기**

1. 당첨 번호 `lottoprizeNumbersInput`를 입력받는다.

   1. 번호는 쉼표(,)를 기준으로 구분한다. → 배열로 만들고, **숫자 배열**로 변경하기. (split()). map(Number)

      `lottoprizeNumbers` = splitByComma(lottoPrizeNumbersInput)

2. 보너스 번호를 입력받는다. (1~45 사이의 번호) `lottoBounsNumber`

   > “보너스 번호를 입력해주세요.”

**4. 당첨 내역 계산하기**

1. 로또 당첨 개수 구하기

   1. 전체 로또 배열 (부모)을 순회한다. (`lottoArray`)

      1. 로또 1개당 당첨 개수 변수 선언 `prizeCount`
      2. 로또 1개 당첨 개수 구하기 `getLottoPrizeCount(lotto, lottoPrizeNumbers)`
         1. 당첨 번호 배열을 순회하며 (`lottoPrizeNumbers`), 해당 로또 안에 번호가 있는지 확인한다. (lotto.numbers.includes(lottoPrizeNumber)
            1. 번호가 있다면, lotto.당첨값을 prizeCount +1 한다.
            2. prizeCont 즉, 번호가 일치하는 개수를 반환한다.
      3. 로또 당첨 수가 5라면, 로또 1개 안에 보너스 번호가 있는지도 확인한다. `getIsBonusNumber`(`lotto, lottoiBounsNumber, prizeCount`)
         1. 있다면 , True로 바꾼다. (includes)
            1. 없다면 그냥 false
      4. 당첨 등수 구하기 `setLottoprizeRank((lottoPrizeCount, LottoPrizeList)`

         1. if문으로 3,4,5,5+,6개 일치한 경우를 각각 따져서, LottoPrizeList에 알맞는 count 에 +1 해준다.
         2. 해당 로또의 당첨 수에 당첨 내역 리스트 객체에 +1 해서 추가해준다.

            보너스 넘버가 있는 경우는 보너스에 카운트 +1한다.

         iii. 아니면 그냥 둔다.

**e. 당첨 내역 출력하기 printLottoPrizeResult (LottoPrizeList)**

1. 당첨 통계\n--- 출력
2. 아래와 같은 형태로 출력한다.

   ```jsx
   3개 일치 (5,000원) - 1개
   4개 일치 (50,000원) - 0개
   5개 일치 (1,500,000원) - 0개
   5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
   6개 일치 (2,000,000,000원) - 0개
   ```

3. 전체 당첨금 구하기 `getSumLottoPrizeMoney()`

4. **수익률 계산하기[`LottoProfit.js`]**
   1. 당첨 내역을 확인하고, 전체 수익을 계산해서 저장한다. `getSumLottoPrizeMoney`
   2. `getLottoPrifitPercent`(순이익, 투자비용)
      1. 수입 계산하기 `constgetLottoPrifitPercent(sumLottoPrizeMoney,lottoBuyMoneyInput)`
      2. **8000/5000 \*100**
5. **수익률 출력하기 `printLottoPrifitPercent`**

   1. 첫째자리에서 반올림은 안하고 자름 → `toFixed(1)` 활용.

   ```jsx
   총 수익률은 62.5%입니다.
   ```

## 예외 정리

1. 로또 번호의 개수가 6개가 넘어가는 경우 isLottoPrizeNumbersLengthmoreThanSix
2. 로또 번호에 중복된 숫자가 있는 경우

3. 입력
   1. 콤마가 아닌 다른 값으로 입력받는 경우 [ERROR]
   2. 입력이 공백인 경우: [ERROR]
   3. 로또 구입 금액 입력
      1. 입력이 1000원으로 나누어 떨어지지 않는 경우
      2. 입력이 숫자가 아닌 경우 : [ERROR] isNan
   4. 당첨 번호 입력 checkLottoBuyCount
      1. (,) 쉼표이외에 다른 기호로 입력받는 경우 : [ERROR]
      2. 입력된 값이 숫자가 아닌 경우 : [ERROR]
      3. 입력된 로또 번호 의 숫자 범위가 1~45 사이가 아닌 경우 : [ERROR]
   5. 보너스 번호 입력
      1. 입력된 값이 숫자가 아닌 경우 : [ERROR]
      2. 입력된 값의숫자 범위가 1~45 사이가 아닌 경우 : [ERROR]
