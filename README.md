# javascript-lotto-precourse

## 필요한 기능

1. 구입 금액을 입력한다.
2. 이를 /1000을 기준으로 로또 번호를 생성한다. 이때, 로또 번혼느 1이상 45 이하의 중복되지 않는 수이다.
3. 당첨 번호를 입력한다.
4. ","룰 기준으로 당첨 번호를 분류한다.
5. 보너스 번호를 입력한다.
6. 1등에서 5등까지 조건을 부여한다.
   - 1등: 6개 번호 일치 / 2,000,000,000원
   - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
   - 3등: 5개 번호 일치 / 1,500,000원
   - 4등: 4개 번호 일치 / 50,000원
   - 5등: 3개 번호 일치 / 5,000원
7. 복권 번호와 당첨번호, 보너스 번호를 비교하여 해당 복권이 몇등인지 계산하고 이를 각 등수에 더해준다.
8. 각 등수마다 몇개가 일치했는지 보여준다.
9. 각 등수들을 계산하여 총 이익과 수익률을 계산한다.
10. 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.
    - 사용자가 1000원으로 나누어 떨어지지 않는 숫자를 입력했을 경우
    - 사용자가 입력한 값에 문자가 들어가 있는 경우 (음수도 포함)
    - 사용자가 입력한 당첨번호와 보너스 숫자의 각 숫자들이 0이하, 45 초과의 숫자를 입력한 경우
    - 당첨 번호와 보너스 번호에 숫자가 아닌 값을 입력한 경우
    - 당첨 번호와 보너스 숫자의 번호가 중복된 경우
    - 당첨 번호를 6개가 아닌 다른 개수를 입력한 경우
    - 보너스 번호를 입력하지 않거나 2개 이상 입력한 경우

## 프로그래밍 요구사항

1. 제공 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리 사용 금지
2. process.exit() 사용 금지
3. indent depth를 2까지만 허용
4. 3항 연산자 사용 금지
5. 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현
6. else를 지양
7. 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI(System.out, System.in, Scanner) 로직은 제외
8. 제공된 Lotto 클래스를 사용하여 구현

## 구조

### 클래스

알겠습니다. `UserLotto` 클래스와 함께 입력값 검증을 전담하는 별도의 **ErrorHandler** 클래스를 설계하고, 검증 및 예외 처리를 이 클래스에 포함하겠습니다.

---

### 클래스 구조

#### UserLotto 클래스

**역할**: 사용자가 구입한 모든 로또 티켓을 관리

**변수**:

- `userLottos(Array)`: 생성된 로또 티켓 배열

**메서드**:

- `generateUserLottos(amount)`: 구입 금액에 따라 로또 티켓을 생성
- `getUserLottos()`: 생성된 로또 티켓 배열을 반환

---

#### LottoResult 클래스

**역할**: 로또 티켓과 당첨 번호, 보너스 번호를 비교하여 등수를 계산하고 당첨 결과를 집계

**변수**:

- `totalPrize(Number)`: 총 당첨 금액
- `totalRank(Arrays)`: 배열을 기준으로 1등 ~ 5등의 개수 저장

**메서드**:

- `calculateRank(userLotto, lottoNumbers, lottoBonusNumber)`: 로또 티켓을 당첨 번호와 비교해 등수를 계산
- `calculateWinningAmount(totalRank)`: 모든 티켓의 등수를 기반으로 당첨 금액 계산
- `calculateProfitRate(winningAmount, purchaseAmount)`: 총 당첨 금액과 구입 금액을 바탕으로 수익률 계산

---

#### Display 클래스

**역할**: 로또 티켓 및 결과를 출력

**메서드**:

- `displayTickets(tickets)`: 로또 티켓 번호를 오름차순으로 정렬하여 출력
- `displayRankNumber(totalRank)`: 각 등수별 당첨 개수 출력
- `displayReturn(profitRate)`: 수익률 출력

---

#### Lotto 클래스

**역할**: 당첨 번호로 사용되는 로또 번호를 관리

**변수**:

- `#numbers(Array)`: 로또 번호 배열

**메서드**:

- `constructor(numbers)`: 당첨 번호를 초기화하고 유효성 검사
- `#validate(numbers)`: 당첨 번호의 개수 검사
- `getLottoNumber()`: 설정된 로또 번호 배열을 반환

---

#### BonusNumber 클래스

**역할**: 보너스 번호를 관리

**변수**:

- `bonus(Number)`: 보너스 번호

**메서드**:

- `constructor(number)`: 보너스 번호를 초기화하고 유효성 검사
- `#validate(number)`: 보너스 번호의 범위와 중복 여부 검사
- `getBonusNumber()`: 설정된 보너스 번호를 반환

---

#### Parser 클래스

**역할**: 입력받은 문자열을 파싱하여 숫자 배열로 변환

**메서드**:

- `parsePurchaseAmount(input)`: 문자열로 입력된 구입 금액을 숫자로 변환
- `parseNumbers(input)`: 문자열로 입력된 번호를 쉼표로 구분하여 숫자 배열로 변환
- `parseBonusNumber(input)`: 문자열로 입력된 보너스 번호를 숫자로 변환

---

#### ErrorCollection 클래스

**역할**: 제대로 입력되었는지 확인하고 오류 출력

**메서드**:

- `checkNumber(purchaseAmount)`: 구입 금액이 자연수인지 확인
- `checkDivide1000(purchaseAmount)`: 구입 금액이 1,000원으로 나누어 떨어지는지 확인
- `checkWinningNumbers1to45(winningNumbers)`: 각 번호가 1~45 범위 내인지 확인
- `checkWinningNumbersDuplicate(winningNumbers)`: 각 번호가 중복이 없는지 확인
- `checkBonusNumber1to45(bonus, winningNumbers)`: 보너스 번호가 1~45 범위 내인지 확인
- `checkBonusNumberDuplicate(bonus, winningNumbers)`: 보너스 번호가 당첨 번호와 중복되지 않는지 확인

## 구현 순서

0. App 클래스 구현

- [ ] `run()` - 문자를 입력받고 이를 console.print()를 통해 제대로 작동하는지 확인

1. Parser 클래스 구현

- 구입 금액과 번호 입력을 파싱하는 기능 구현
  - [ ] `parsePurchaseAmount(input)` - 문자열로 입력된 구입 금액을 숫자로 변환
  - [ ] `parseNumbers(input)` - 문자열로 입력된 번호를 쉼표로 구분하여 숫자 배열로 변환
  - [ ] `parseBonusNumber(input)` - 문자열로 입력된 보너스 번호를 숫자로 변환

2. UserLotto 클래스 구현

- 사용자 구입 금액에 따라 로또 티켓 생성 기능 구현
  - [ ] `generateUserLottos(amount)` - 구입 금액에 따라 로또 티켓을 생성
  - [ ] `getUserLottos()` - 생성된 로또 티켓 배열을 반환

3. Lotto 클래스 구현

- 당첨 번호 관리 기능 구현
  - [ ] `constructor(numbers)` - 당첨 번호를 초기화하고 유효성 검사
  - [ ] `#validate(numbers)` - 당첨 번호의 개수 및 유효성 검사
  - [ ] `getLottoNumber()` - 설정된 로또 번호 배열을 반환

4. BonusNumber 클래스 구현

- 보너스 번호 관리 기능 구현
  - [ ] `constructor(number)` - 보너스 번호를 초기화하고 유효성 검사
  - [ ] `#validate(number, winningNumbers)` - 보너스 번호의 범위와 중복 여부 검사
  - [ ] `getBonusNumber()` - 설정된 보너스 번호를 반환

5. LottoResult 클래스 구현

- 로또 티켓, 당첨 번호, 보너스 번호를 비교하여 등수 계산
  - [ ] `calculateRank(userLotto, lottoNumbers, lottoBonusNumber)` - 로또 티켓을 당첨 번호와 비교하여 등수를 계산
  - [ ] `calculateWinningAmount(totalRank)` - 등수별로 당첨 개수를 기반으로 당첨 금액 계산
  - [ ] `calculateProfitRate(winningAmount, purchaseAmount)` - 총 당첨 금액과 구입 금액을 바탕으로 수익률 계산

6. Display (LottoOutputRenderer) 클래스 구현

- 로또 티켓과 결과를 출력
  - [ ] `displayTickets(tickets)` - 로또 티켓 번호를 오름차순으로 정렬하여 출력
  - [ ] `displayRankNumber(totalRank)` - 등수별 당첨 개수를 출력
  - [ ] `displayReturn(profitRate)` - 수익률 출력

7. ErrorCollection 클래스 구현
