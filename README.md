# javascript-lotto-precourse

주어진 작업들을 단계별로 분류하면 다음과 같이 나눌 수 있습니다.

---

### 1. **기본 구현 완료**

- [x] 아무 도움 없이 처음부터 끝까지 구현에 성공하고, 테스트도 성공한다. (2시간 55분 소요로 통과)

---

### 2. **리팩토링 단계**

#### 2.1 **MVC 구조 적용**

- [ ] View, Model, Controller를 구분한다.
- [x] View에서 Input, Output을 구분한다.
- [x] Validation logic을 만들고 분리한다.
- [x] View에서 Error를 발생하고, 메시지를 재시작하는 로직을 구현해본다.
- [ ] `lotteryNumbers`, `bonusNumber`, `paidAmount`를 어디에 보관할지 고민해본다.

---

### 3. **클래스별 기능 추가 및 테스트**

#### 3.1 **Lotto 클래스**

- [ ] Lotto class에 validation을 더 추가한다.
- [ ] Lotto가 정렬되어있는지 확인한다.
- [ ] Lotto 클래스의 unit Test를 작성한다.

#### 3.2 **LotteryFactory 클래스**

- [ ] LotteryFactory의 validation 더 추가한다.
- [ ] Lotteries의 길이를 확인한다.
- [ ] LotteryFactory의 unit Test를 작성한다.

#### 3.3 **LotteryNumbers 클래스**

- [x] LotteryNumber가 중복된 수가 있는지 확인한다.
- [x] 정확한 값이 입력되었는지 확인한다.
- [x] 트림 기능을 넣는 것을 고민해본다.
- [x] 중복자를 검출하는 것을 고민해본다.
- [x] LotteryNumbers의 unitTest를 작성한다.
- [ ] LotteryNumbers의 unitTest를 보충한다.

#### 3.4 **ValidateBonusNumber**

- [x] 보너스가 중복되는 것을 방지한다.
- [x] 보너스 넘버 validation의 유닛 테스트를 작성한다.

#### 3.5 **RankCalculationService 클래스**

- [x] 클래스를 생성한다.
- [ ] 유닛 테스트를 생성한다.

#### 3.6 **PickRank 클래스**

- [ ] Unit Test를 통해, 확실히 rank를 받는지 확인한다.

#### 3.7 **LotteryNotes**

- [ ] Validation을 진행한다. `parseInt`가 잘 적용되는지 확인한다.

---

### 4. **Validation 관련 작업**

- [ ] Validation logic을 구분하고, 어디에 붙일지 생각해본다.
- [x] `validateMoney`의 유닛 테스트 작성
- [ ] Trim을 도입할지 결정한다.

---

### 5. **Validator 리팩터링**

- [x] Validator를 리팩터링하여 함수의 줄 수를 줄인다.

---

### 6. **App.js 모듈화**

- [x] 각종 로또 관련한 함수를 구현한 `LotteryService`를 만든다.
- [x] Input/Output을 담당하는 `IOService`를 만든다.
- [x] `RankCalculationService`에 로또 당첨금을 계산하게 한다.
- [x] `StatisticsService`를 통해 통계를 보여준다.
- [ ] 모든 서비스는 DI(Dependency Injection)를 통해 주입한다.

---

간단한 로또 발매기를 구현 확인한다.

- [] 로또 번호의 숫자 범위는 1~45까지이다.
- [] 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- [] 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- [] 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
- [] 1등: 6개 번호 일치 / 2,000,000,000원
- [] 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
- [] 3등: 5개 번호 일치 / 1,500,000원
- [] 4등: 4개 번호 일치 / 50,000원
- [] 5등: 3개 번호 일치 / 5,000원
- [] 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- [] 로또 1장의 가격은 1,000원이다.
- [] 당첨 번호와 보너스 번호를 입력받는다.
- [] 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- [] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

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

## 당첨 통계

3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
