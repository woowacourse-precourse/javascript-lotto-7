# javascript-lotto-precourse

# 로또 발매기 설명

로또 발매기는 사용자에게서 로또 구입 금액을 입력받아 로또를 발행한다. 사용자가 당첨 번호와 보너스 번호를 입력하면 발행된 로또 번호와 비교하여 당첨 결과와 수익률을 출력한다.

## flow

1. 사용자에게서 로또를 구매할 금액을 입력받는다.
   금액을 1000원 단위로 입력받을 수 있고, 1000원으로 나누어 떨어지지 않는경우 Error를 발생시키고 금액을 다시 입력받는다.

   ```javascript
   구입금액을 입력해 주세요.
   8000
   ```

2. 구매한 로또의 갯수와 발행된 로또 번호를 출력한다.  
   로또 번호는 1에서 45사이의 숫자여야 한다.

   ```javascript
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

3. 사용자에게서 당첨 번호를 입력받는다.  
   사용자는 쉼표를 기준으로 번호를 구분하며 6개의 숫자를 입력한다.

   ```javascript
   당첨 번호를 입력해 주세요.
   1,2,3,4,5,6
   ```

4. 사용자에게서 보너스 번호를 입력받는다.
   보너스 번호는 당첨 번호과 중복되지 않아야 한다.

   ```javascript
   보너스 번호를 입력해 주세요.
   7
   ```

5. 당첨 통계를 출력한다.  
    당첨 번호와 보너스 번호를 기준으로 로또 번호와 비교하여 당첨 내역을 출력한다.
   당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.

   - 1등: 6개 번호 일치 / 2,000,000,000원
   - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
   - 3등: 5개 번호 일치 / 1,500,000원
   - 4등: 4개 번호 일치 / 50,000원
   - 5등: 3개 번호 일치 / 5,000원

   최종적으로 사용자가 구매한 금액과 당첨 상금을 비교하여 총 수익률을 계산하여 출력한다.
   총 수익률을 소숫점 두번째 자리에서 반올림한다.

   ```javascript
   당첨 통계
   ---
   3개 일치 (5,000원) - 1개
   4개 일치 (50,000원) - 0개
   5개 일치 (1,500,000원) - 0개
   5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
   6개 일치 (2,000,000,000원) - 0개
   총 수익률은 62.5%입니다.
   ```

## 기능 구현 사항

### 입력 기능

- [x] 구입금액을 입력받는다.
- [ ] 당첨 번호를 입력받는다.
- [ ] 보너스 번호를 입력받는다.

### 출력 기능

- [ ] 발행한 로또 수량과 번호를 출력한다.
  - [ ] 번호를 오름 차순으로 정렬한다.
- [ ] 당첨 내열을 출력한다.
- [ ] 총 수익률을 소숫점 둘째자리에서 반올림하여 출력한다.

### 검증 기능

에러를 발생시킨 후 해당 지점부터 다시 입력을 받는다.

- 구입금액 입력에 대한 유효성 검증
  - [x] 빈 입력이거나 공백인 경우
  - [x] 숫자가 아닌 경우
  - [x] 1000원보다 작은 값인 경우
  - [x] 1000원으로 나누어 떨어지지 않는 경우
- 당첨 번호 입력에 대한 유효성 검증
  - [ ] 빈 입력이거나 공백인 경우
  - [ ] 번호가 1에서 45 사이의 숫자가 아닌경우
  - [ ] 구분자가 쉼표(,) 가 아닌 경우
  - [ ] 숫자가 아닌 경우
  - [ ] 6개의 숫자가 아닌경우
  - [ ] 당첨번호가 서로 중복되는 경우
- 보너스 번호 입력에 대한 유효성 검증
  - [ ] 빈 입력이거나 공백인 경우
  - [ ] 숫자가 아닌 경우
  - [ ] 1에서 45 사이의 숫자가 아닌 경우
  - [ ] 당첨 번호와 중복되는 경우

## 게임 로직 기능

- 입력한 금액에 맞게 로또를 발행한다.
- 로또 번호를 생성한다.
- 각 로또 당 당첨번호, 보너스 번호와 몇개가 일치하는지 계산한다.
- 로또 결과 등수를 계산한다.
- 당첨 금액을 계산한다.
- 총 수익률을 계산한다.
- 에러를 반환할 경우 다시 입력받는다.

## 상수 정의

### 게임 상수

- 당첨 번호 구분자 : 쉼표(,)
- 로또 번호의 최솟값 : 1
- 로또 번호의 최댓값 : 45
- 로또 1장의 가격 : 1000
- 로또 숫자 갯수 : 6
- 보너스 번호의 갯수 : 1
- 1등 당첨 금액 : 2,000,000,000원
- 2등 당첨 금액 : 30,000,000원
- 3등 당첨 금액 : 1,500,000원
- 4등 당첨 금액 : 50,000원
- 5등 당첨 금액 : 5000원

### 출력 메세지 상수

- "구입금액을 입력해 주세요."
- "n개를 구매했습니다."
- "당첨 번호를 입력해 주세요."
- "보너스 번호를 입력해 주세요"
- "당첨 통계"
- "---"
- 구매한 로또 출력 기호 : `[`, `]`
- 구매한 로또 번호 구분자 : `,`
- "n개 일치"
- "{상금}원"
- '-'
- "개"
- "총 구익률은 {n}%입니다."

### 에러 메세지 상수

- [ERROR]
- 공백이 아닌 값을 입력해야 합니다.
- {단위금액}원 이상부터 구매할 수 있습니다.
- {단위금액}원 단위로 입력해주세요.
- 로또 번호는 {min}~{max} 사이의 정수값 이여야 합니다.
- 번호를 쉼표(,)로 구분해서 입력해주세요.
- 숫자를 입력해주세요.
- 당첨 번호는 {로또 숫자 갯수}개의 숫자로 입력해주세요.
- 보너스 번호는 당첨 번호와 중복되지 않는 값을 입력해주세요.
