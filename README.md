# javascript-lotto-precourse

## 기능 구현 목록

### 1. 로또 구매 단계

- 구입 금액 입력

  - [x] 로또 구입 금액을 입력받는다. `getPurchaseAmount()`
  - [x] 숫자만 입력할 수 있다.
  - [x] 1,000원 단위로 구매할 수 있다.
  - [x] 구매 한도는 최대 100,000원이다.
  - [x] 구입 금액에 따른 로또 발행 개수를 계산한다.

- 예외 처리 `validatePurchaseAmount()`

  - [x] 숫자가 아닌 값을 입력한 경우 `validateIsNumber()`
  - [x] 1,000원 미만의 금액을 입력한 경우 `validateAmountRange()`
  - [x] 1,000원으로 나누어떨어지지 않는 금액을 입력한 경우 `validateAmountRange()`
  - [x] 구매 한도를 초과한 값을 입력한 경우 `validateAmountRange()`

### 2. 로또 발행 단계

- 로또 발행 개수만큼 반복하여 수행한다. `generateLottos()`
  - [x] 1부터 45 사이의 중복되지 않는 랜덤한 숫자를 6개 생성한다. `generateLottoNumbers()`
  - [x] 오름차순으로 정렬한다.
- [x] 모든 로또 번호를 출력한 후 다음 단계로 넘어간다.

- 예외 처리 `validateLotto()`
  - [x] 6개의 숫자가 아닌 경우 `validateLength()`
  - [x] 중복된 숫자가 있는 경우 `validateDuplicates()`
  - [x] 1부터 45 사이의 숫자가 아닌 경우 `validateSingleNumberInRange()`

### 3. 당첨/보너스 번호 입력 단계

- 당첨 번호 입력
  - [x] 당첨 번호를 입력받는다. `getWinningNumbers()`
  - [x] 당첨 번호는 쉼표(,)를 기준으로 구분한다. `parseWinningNumbers()`
  - [x] 각 숫자는 1부터 45 사이의 정수만 가능하다.
  - [x] 6개의 숫자만 입력할 수 있다.
  - [x] 중복되는 숫자를 입력할 수 없다.
- 보너스 번호 입력
  - [x] 보너스 번호를 입력받는다. `getBonusNumber()`
  - [x] 숫자는 1부터 45 사이의 정수만 가능하다.
  - [x] 1개의 숫자만 입력할 수 있다.
  - [x] 보너스 번호가 앞서 입력한 당첨 번호와 중복될 수 없다.
- 예외 처리 <br>

  - 당첨 번호 `validateWinningNumbers()`

    - [x] 숫자와 쉼표(,) 이외의 문자가 입력된 경우
    - [x] 6개의 숫자가 아닌 경우
    - [x] 중복된 숫자가 있는 경우

  - 보너스 번호 `validateBonusNumber()`
    - [x] 숫자 이외의 문자가 입력된 경우
    - [x] 1개의 숫자가 아닌 경우
    - [x] 당첨 번호와 중복되는 경우
  - [x] 1부터 45 사이의 정수가 아닌 경우 `validateSingleNumberInRange()`

### 4. 로또 결과 분석 단계

- 당첨 내역 계산

  - 각 로또 번호에 대해 반복하여 수행한다. `getMatchingCount()`
    - [x] 당첨 번호와 일치하는 숫자의 개수를 센다.
    - [x] 보너스 번호와 일치하는지 확인한다.
    - [x] 당첨 번호와 일치하는 숫자의 개수와 보너스 번호 일치 여부에 따라 등수를 판단한다.
  - [x] 등수 별로 당첨된 로또 개수를 집계한다. `calculateResults()`

- 당첨 내역 출력 `printResult()`
  - [x] 당첨 통계 메시지를 출력한다.
  - [x] '---' 구분선을 출력한다.
  - [x] 등수별 당첨 개수를 아래 형식으로 출력한다.
    ```
    3개 일치 (5,000원) - X개
    4개 일치 (50,000원) - X개
    5개 일치 (1,500,000원) - X개
    5개 일치, 보너스 볼 일치 (30,000,000원) - X개
    6개 일치 (2,000,000,000원) - X개
    ```
- 수익률 계산 및 출력
  - [x] 총 당첨 금액을 계산한다. `calculateTotalPrize()`
  - [x] 수익률을 계산한다. `calculateROI()` <br>
        `(총 당첨 금액 / 로또 구입 금액) * 100`
  - [x] 수익률을 소수점 둘째 자리에서 반올림한다.
  - [x] '총 수익률은 X%입니다.' 형식으로 수익률을 출력한다. `printROI()`

### 5. 공통 예외 처리 사항

- 사용자가 잘못된 값을 입력할 경우 에러를 발생시킨다.
- 에러 메시지는 `[ERROR]`로 시작한다.
- 에러 메시지를 출력한 후 해당 입력 단계부터 다시 진행한다.
- 모든 과정이 정상적으로 완료되면 프로그램을 종료한다.

## 개선 목록

### 목표

구현 기능 목록에 작성한 모든 기능을 구현한 후 개선할 점을 생각해 보고 개선을 시도해 본다.

1. 클래스의 책임 분리
   - 문제점: 하나의 클래스가 여러 가지 역할을 동시에 수행하고 있음
     ```
     기존 ResultController 클래스가
     사용자 입력 처리, 데이터 파싱과 유효성 검사, 당첨 결과 계산, 총 당첨 금액 & 수익률 계산을 모두 담당하고 있었음
     ```
   - 해결 방안:
     - 각 역할을 별도의 클래스로 분리
       ```
       InputController: 사용자 입력을 처리하고 검증
       ResultCalculator: 결과를 계산하는 비즈니스 로직 담당
       ResultController: 전체적인 흐름을 관리하고, 각 구성 요소를 조합하여 최종 결과를 출력
       ```
2. 상수화 및 매직 넘버 제거

   - 상수를 표기할 때 놓쳤던 규칙을 적용한다.

     > **Airbnb 스타일 가이드**
     > object를 export 할 때는 object의 상위 레벨에서만 대문자 표기를 사용하고, 내부 키(key)들은 소문자로 표기한다.

     ```
     // bad - unnecessarily uppercases key while adding no semantic value
     export const MAPPING = {
       KEY: 'value'
     };

     // good
     export const MAPPING = {
       key: 'value',
     };
     ```

3. 중복되는 로직 제거
4. 클래스명, 변수명, 메소드명 의미가 명확하도록 수정
5. 단일 책임 원칙 적용
   - 문제점: <br>
     Validator 클래스를 구성했을 때 유효성 검사하는 역할을 수행한다 생각하여 로또 구입 금액, 로또 번호, 당첨 번호, 보너스 번호 입력 값에 대한 유효성 검사를 모두 포함해도 될 것이라 생각했었음<br>
     이는 단일 책임 원칙에 위배되어 해당 클래스를 개선하고자 함
   - 해결 방안:
     - Validator 클래스를 여러 클래스로 나누어 각 클래스가 특정 입력에 대한 유효성 검사만 담당하도록 한다.
       ```
       WinningNumberValidator: 당첨 번호에 대한 유효성 검사를 담당
       BonusNumberValidator: 보너스 번호에 대한 유효성 검사를 담당
       LottoNumberValidator: 로또 번호에 대한 유효성 검사를 담당
       PurchaseAmountValidator: 로또 구입 금액에 대한 유효성 검사를 담당
       ```

## 테스트 목록

### 목표

- 어떤 기능과 로직이 테스트되어야 하는지 미리 정의하여 테스트의 범위를 명확하게 설정할 수 있다.

### 유닛 테스트

개별 함수와 모듈이 예상대로 작동하는지 확인한다.

1. 로또 구입 금액 입력 유효성 검사

   - 로또 구입 금액이 1,000원 단위로 입력된 경우 => 통과
   - 로또 구입 금액이 1,000원 이상, 100,000원 이하일 경우 => 통과
   - 1,000원 단위로 나누어떨어지지 않는 금액 입력 시 => 에러
   - 1,000원 미만의 금액 입력 시 => 에러
   - 100,000원을 초과하는 금액 입력 시 => 에러
   - 숫자가 아닌 문자 입력 시 => 에러

2. 로또 번호 발행 유효성 검사 (LottoTest.js)

   - 1부터 45 사이의 중복되지 않는 숫자 6개가 발행된 경우 => 통과
   - 발행된 로또 번호가 오름차순으로 정렬된 경우 => 통과
   - 중복된 숫자가 포함된 경우 => 에러
   - 숫자가 6개 미만 또는 초과된 경우 => 에러
   - 1부터 45를 벗어난 숫자가 포함된 경우 => 에러

     ![image](https://private-user-images.githubusercontent.com/101461874/382272519-e292eaa2-14fd-4d0d-8849-f036fe97511f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA0NjI1MjEsIm5iZiI6MTczMDQ2MjIyMSwicGF0aCI6Ii8xMDE0NjE4NzQvMzgyMjcyNTE5LWUyOTJlYWEyLTE0ZmQtNGQwZC04ODQ5LWYwMzZmZTk3NTExZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEwMVQxMTU3MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNzY3MTUxMTBjMDgxNzA0NTA5MDAwNTczZGViNzFjOTc5OWUxYjAwMjkzZmJmODMxNjNmYTUzYmY4MTUxNmRmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.m9kBdWRORgIZEa-NOHMq4-2UVrT9Ke-qHGU-vWUt7Lo)

3. 당첨 번호 및 보너스 번호 입력 유효성 검사

   - 1부터 45 사이의 숫자 6개를 쉼표(,)로 구분하여 입력할 경우 => 통과
   - 중복되지 않는 보너스 번호를 입력할 경우 => 통과
   - 6개의 숫자가 아닌 경우 => 에러
   - 당첨 번호에 중복된 숫자가 포함된 경우 => 에러
   - 1부터 45를 벗어난 숫자가 포함된 경우 => 에러
   - 보너스 번호가 당첨 번호와 중복될 경우 => 에러

4. 당첨 결과 계산 로직

   - 당첨 번호와 비교하여 일치하는 숫자 개수를 올바르게 계산하는지 확인
   - 당첨 번호와 일치하는 숫자 개수에 따라 등수가 올바르게 판별되는지 확인
   - 보너스 번호가 일치할 경우 5개 일치와 보너스 볼 일치로 판별되는지 확인
