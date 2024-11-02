# 우아한테크코스 로또

## 개요

이 프로그램은 콘솔 기반의 간단한 로또 발매기입니다. 사용자는 구입 금액을 입력하여 해당 금액만큼 로또를 구매하고, 당첨 번호와 보너스 번호를 입력하여 당첨 결과와 수익률을 확인할 수 있습니다.

## 기능

- **로또 발행**: 입력한 금액에 따라 로또를 발행합니다. 로또 한 장의 가격은 1,000원이며, 각 로또는 1부터 45 사이의 중복되지 않는 6개의 숫자로 구성됩니다.
- **당첨 번호 입력**: 당첨 번호 6개와 보너스 번호 1개를 입력받습니다. 모든 번호는 1부터 45 사이의 중복되지 않는 숫자여야 합니다.
- **당첨 결과 확인**: 구매한 로또와 당첨 번호를 비교하여 당첨 내역과 수익률을 계산하여 출력합니다.
- **에러 처리**: 잘못된 입력이 있을 경우 "[ERROR]"로 시작하는 메시지를 출력하고, 해당 단계부터 다시 입력을 받습니다.

## 당첨 기준 및 상금

| 등수 | 당첨 기준                        | 상금(원)      |
| ---- | -------------------------------- | ------------- |
| 1등  | 6개 번호 일치                    | 2,000,000,000 |
| 2등  | 5개 번호 일치 + 보너스 번호 일치 | 30,000,000    |
| 3등  | 5개 번호 일치                    | 1,500,000     |
| 4등  | 4개 번호 일치                    | 50,000        |
| 5등  | 3개 번호 일치                    | 5,000         |

## 사용 방법

1. **프로그램 실행**: 콘솔에서 프로그램을 실행합니다.
2. **구입 금액 입력**: 로또를 구매할 금액을 입력합니다. (예: `5000`)
3. **로또 발행**: 프로그램이 입력한 금액에 따라 로또를 발행하고 번호를 출력합니다.
4. **당첨 번호 입력**: 6개의 당첨 번호를 쉼표로 구분하여 입력합니다. (예: `1, 15, 23, 34, 40, 45`)
5. **보너스 번호 입력**: 보너스 번호 1개를 입력합니다. (예: `7`)
6. **당첨 결과 출력**: 당첨 내역과 수익률을 확인합니다.

## 프로그램 구조

이 프로그램은 **LottoController** 클래스를 중심으로 구성되어 있으며, 여러 서비스 객체들과 협력하여 로또 발매와 당첨 결과 계산 등의 기능을 수행합니다.

### LottoController 클래스

`LottoController`는 프로그램의 흐름을 제어하는 컨트롤러 역할을 합니다. 주요 메서드와 그 역할은 다음과 같습니다:

- **run()**: 프로그램의 전체 실행 흐름을 제어합니다.
- **getPurchaseAmount()**: 사용자로부터 구입 금액을 입력받습니다.
- **purchaseLotteries(purchaseAmount)**: 입력된 금액만큼 로또를 발행하고 출력합니다.
- **getWinningNumbers()**: 당첨 번호 6개를 입력받습니다.
- **getBonusNumber(winningNumbers)**: 보너스 번호 1개를 입력받습니다.
- **calculateResults(purchasedLotteries, winningNumbers, bonusNumber)**: 구매한 로또와 당첨 번호를 비교하여 등수를 계산합니다.
- **displayResults(rankCounts, purchaseAmount)**: 당첨 내역과 수익률을 출력합니다.

### 서비스 구성 요소

- **lotteryService**: 로또 발행과 관련된 로직을 처리합니다.
  - `calculateNumberOfNotes(purchaseAmount)`: 구입 금액에 따른 로또 장수 계산
  - `generateLotteries(numberOfTickets)`: 로또 번호 생성
- **ioService**: 입출력과 관련된 작업을 담당합니다.
  - `getInputWhileValid(validationFunction, messageFunction)`: 유효한 입력을 받을 때까지 반복하여 입력 요청
  - `printMessage(message)`: 메시지 출력
  - `printLotteries(lotteries)`: 구매한 로또 번호 출력
  - `printStatistics(rankCounts)`: 당첨 통계 출력
  - `printRevenueRate(revenueRate)`: 수익률 출력
  - `systemMessages`: 사용자에게 보여줄 메시지 모음
- **rankCalculator**: 당첨 결과를 계산합니다.
  - `calculateLotteries(purchasedLotteries, winningNumbers, bonusNumber)`: 각 로또의 당첨 등수 계산
  - `getRankCounts()`: 등수별 당첨 개수 반환
- **validationService**: 입력된 값의 유효성을 검증합니다.
  - `isValidMoney(input)`: 금액의 유효성 검사
  - `isValidLottoNumber(input)`: 로또 번호의 유효성 검사
  - `isValidBonusNumber(input, winningNumbers)`: 보너스 번호의 유효성 검사
- **statisticsService**: 통계와 관련된 계산을 수행합니다.
  - `calculateTotalRevenue(rankCounts, purchaseAmount)`: 총 당첨 금액 계산
  - `calculateRevenueRate(totalRevenue, purchaseAmount)`: 수익률 계산

### 프로그램 흐름

1. **구입 금액 입력**
   - `getPurchaseAmount()` 메서드를 통해 사용자가 구입 금액을 입력합니다.
   - `validationService.isValidMoney`를 사용하여 입력된 금액의 유효성을 검사합니다.
2. **로또 발행**
   - `purchaseLotteries(purchaseAmount)` 메서드를 통해 로또를 발행합니다.
   - `lotteryService.calculateNumberOfNotes`를 사용하여 구매할 로또 장수를 계산합니다.
   - `lotteryService.generateLotteries`를 통해 로또 번호를 생성합니다.
3. **당첨 번호 입력**
   - `getWinningNumbers()` 메서드를 통해 당첨 번호 6개를 입력받습니다.
   - `validationService.isValidLottoNumber`를 사용하여 당첨 번호의 유효성을 검사합니다.
4. **보너스 번호 입력**
   - `getBonusNumber(winningNumbers)` 메서드를 통해 보너스 번호 1개를 입력받습니다.
   - `validationService.isValidBonusNumber`를 사용하여 보너스 번호의 유효성을 검사합니다.
5. **당첨 결과 계산**
   - `calculateResults(purchasedLotteries, winningNumbers, bonusNumber)` 메서드를 통해 당첨 결과를 계산합니다.
   - `rankCalculator.calculateLotteries`를 사용하여 각 로또의 당첨 등수를 계산합니다.
6. **결과 출력**
   - `displayResults(rankCounts, purchaseAmount)` 메서드를 통해 당첨 내역과 수익률을 출력합니다.
   - `statisticsService.calculateTotalRevenue`와 `statisticsService.calculateRevenueRate`를 사용하여 총 당첨 금액과 수익률을 계산합니다.
   - `ioService.printStatistics`와 `ioService.printRevenueRate`를 통해 결과를 출력합니다.

## 예시

```
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

## 에러 처리 예시

- **구입 금액이 1,000원 단위가 아닌 경우**:
  ```
  [ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.
  ```
- **당첨 번호 입력 오류**:
  ```
  [ERROR] 당첨 번호는 1에서 45 사이의 중복되지 않는 숫자 6개여야 합니다.
  ```
- **보너스 번호 입력 오류**:
  ```
  [ERROR] 보너스 번호는 1에서 45 사이의 숫자이며, 당첨 번호와 중복될 수 없습니다.
  ```

## 프로그램 종료

- 당첨 결과와 수익률을 출력한 후 프로그램이 종료됩니다.

## 라이선스

- 이 프로그램은 MIT 라이선스에 따라 배포됩니다.

# 프로그램 구조

이 프로그램은 **MVC 패턴**과 유사한 구조로 구성되어 있으며, 각 컴포넌트는 다음과 같은 역할을 합니다.

## 컨트롤러 (Controller)

- **LottoController**: 프로그램의 전반적인 흐름을 제어하는 역할을 합니다. 사용자 입력을 받아 로직을 처리하고, 결과를 출력합니다.

## 서비스 (Services)

- **lotteryService**: 로또 번호 생성 및 로또 구매와 관련된 기능을 제공합니다.
- **validationService**: 사용자 입력의 유효성을 검증하는 기능을 제공합니다.
- **rankCalculator**: 구매한 로또와 당첨 번호를 비교하여 등수를 계산합니다.
- **statisticsService**: 당첨 통계와 수익률을 계산합니다.

## 입출력 (I/O)

- **ioService**: 사용자와의 상호 작용을 담당합니다. 입력을 받고 출력을 제공합니다.

## 프로그램 흐름 상세 설명

1. **사용자에게 구입 금액을 입력받습니다.**
   - `ioService`를 통해 입력을 받고, `validationService.isValidMoney`로 유효성을 검사합니다.
2. **로또를 구매합니다.**
   - `lotteryService`를 사용하여 구매 가능한 로또 장수를 계산하고, 로또 번호를 생성합니다.
   - 생성된 로또 번호를 `ioService.printLotteries`를 통해 출력합니다.
3. **당첨 번호와 보너스 번호를 입력받습니다.**
   - `ioService`를 통해 당첨 번호와 보너스 번호를 입력받고, `validationService`를 통해 유효성을 검사합니다.
4. **당첨 결과를 계산합니다.**
   - `rankCalculator`를 사용하여 각 로또의 당첨 등수를 계산하고, 등수별 당첨 개수를 집계합니다.
5. **당첨 통계와 수익률을 출력합니다.**
   - `statisticsService`를 사용하여 총 당첨 금액과 수익률을 계산합니다.
   - `ioService`를 통해 결과를 출력합니다.

## 각 컴포넌트의 역할

- **LottoController**
  - 프로그램 실행의 진입점이며, 전체적인 흐름을 관리합니다.
- **lotteryService**
  - 로또 번호 생성 로직을 포함합니다.
  - 구입 금액에 따른 로또 장수 계산을 담당합니다.
- **validationService**
  - 입력된 값들이 유효한지 검증합니다.
  - 숫자의 범위, 중복 여부 등을 확인합니다.
- **rankCalculator**
  - 구매한 로또 번호와 당첨 번호를 비교하여 일치하는 번호의 개수를 세고, 당첨 등수를 결정합니다.
- **statisticsService**
  - 등수별 당첨 횟수를 기반으로 총 당첨 금액과 수익률을 계산합니다.
- **ioService**
  - 사용자로부터 입력을 받고, 결과를 출력합니다.
  - 에러 메시지 출력 및 재입력 요청 등의 기능을 포함합니다.

## 예외 처리

- 모든 사용자 입력 단계에서 입력값의 유효성을 검사합니다.
- 유효하지 않은 입력이 들어올 경우, 해당 단계부터 다시 입력을 받습니다.
- 에러 메시지는 "[ERROR]"로 시작하며, 사용자가 이해하기 쉽게 작성됩니다.

## 개발 및 확장성

- 각 기능이 모듈화되어 있어 유지보수와 확장이 용이합니다.
- 새로운 기능 추가 시 관련된 서비스나 컴포넌트를 추가하여 기능을 확장할 수 있습니다.

## 체크리스트

### 1. **기본 구현 완료**

- [x] 아무 도움 없이 처음부터 끝까지 구현에 성공하고, 테스트도 성공한다. (2시간 55분 소요로 통과)

---

### 2. **리팩토링 단계**

#### 2.1 **MVC 구조 적용**

- [x] View에서 Input, Output을 구분한다.
- [x] Validation logic을 만들고 분리한다.
- [x] View에서 Error를 발생하고, 메시지를 재시작하는 로직을 구현해본다.
- [x] `lotteryNumbers`, `bonusNumber`, `paidAmount`를 어디에 보관할지 고민해본다.

---

### 3. **클래스별 기능 추가 및 테스트**

#### 3.1 **Lotto 클래스**

- [x] Lotto class에 validation을 더 추가한다.
- [x] Lotto가 정렬되어있는지 확인한다.
- [x] Lotto 클래스의 unit Test를 작성한다.

#### 3.2 **LotteryFactory 클래스**

- [x] LotteryFactory의 validation 더 추가한다.
- [x] Lotteries의 길이를 확인한다.
- [x] LotteryFactory의 unit Test를 작성한다.

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
- [x] 유닛 테스트를 생성한다.
- [x] Unit Test를 통해, 확실히 rank를 받는지 확인한다.

#### 3.7 **Notes 클래스**

- [x] Validation을 진행한다. `parseInt`가 잘 적용되는지 확인한다.

#### 3.8 **StatisticsService**

- [] 유닛 테스트를 만든다.

---

### 4. **Validation 관련 작업**

- [x] Validation logic을 구분하고, 어디에 붙일지 생각해본다.
- [x] `validateMoney`의 유닛 테스트 작성
- [x] Trim을 도입할지 결정한다.

---

### 5. **Validator 리팩터링**

- [x] Validator를 리팩터링하여 함수의 줄 수를 줄인다.

---

### 6. **App.js 모듈화**

- [x] 각종 로또 관련한 함수를 구현한 `LotteryService`를 만든다.
- [x] Input/Output을 담당하는 `IOService`를 만든다.
- [x] `RankCalculationService`에 로또 당첨금을 계산하게 한다.
- [x] `StatisticsService`를 통해 통계를 보여준다.
- [x] 모든 서비스는 DI(Dependency Injection)를 통해 주입한다.

---

간단한 로또 발매기를 구현 확인한다.

- [x] 로또 번호의 숫자 범위는 1~45까지이다.
- [x] 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- [x] 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- [x] 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
- [x] 1등: 6개 번호 일치 / 2,000,000,000원
- [x] 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
- [x] 3등: 5개 번호 일치 / 1,500,000원
- [x] 4등: 4개 번호 일치 / 50,000원
- [x] 5등: 3개 번호 일치 / 5,000원
- [x] 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- [x] 로또 1장의 가격은 1,000원이다.
- [x] 당첨 번호와 보너스 번호를 입력받는다.
- [x] 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- [x] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.
