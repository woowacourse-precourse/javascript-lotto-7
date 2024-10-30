# 🏁 3주차 미션 - [로또]

## 📌 개요

- 우아한 테크코스 프리코스 3주차 과제의 제출본입니다.
- MVC 디자인 패턴을 따랐습니다.

## 🚀 기능 요구 사항

- 간단한 로또 발매기를 구현한다.
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
  - 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다

## 📌 목록

### [1. 시나리오](#📘-시나리오)

### [2. 기능 리스트](#🚀-기능-리스트)

- [ ] 사용자로부터 로또 구입 금액을 입력 받기
  - [ ] 입력받은 로또 구입 금액 예외처리
- [ ] 입력받은 로또 구입 금액으로부터 발행한 로또 수량 구하기
- [ ] 사용자가 발행한 로또 수량만큼 로또 발행
- [ ] 사용자가 발행한 로또 수량과 번호를 출력
- [ ] 사용자로부터 당첨 번호를 입력받기
  - [ ] 입력받은 당첨 번호 예외 처리
- [ ] 사용자로부터 보너스 번호를 입력 받기
  - [ ] 보너스 번호 예외처리
- [ ] 로또 추첨을 하고 당첨 내역을 출력
- [ ] 수익률을 구하고 출력
- [ ] 종료

### [3. 예외 테스트](#🚨-예외-테스트)

- 입력받은 로또 구입 금액 예외 처리
- 입력받은 당첨 번호 예외 처리
- 입력받은 보너스 번호 예외 처리

### [4. 디자인](#🧑‍🎨-디자인)

- mvc 패턴에 따른 설계

---

## 📘 시나리오

1. 사용자로부터 로또 구입 금액을 입력 받는다.
   - 금액 유효성 검사를 한다.
     - 금액이 양수인지
     - 1,000원으로 나누어 떨어지는지
2. 금액을 1,000으로 나누어 발행한 로또 갯수를 구한다.
3. 사용자가 구입한 금액만큼 로또를 발행시킨다.
   - 로또 번호의 숫자 범위는 1~45이다.
   - 1개의 로또를 발행할 때는 중복되지 않는 6개의 숫자를 뽑는다.
4. 발행한 로또 수량 및 번호를 출력한다.
   - 로또 번호는 오름차순으로 정렬하여 출력한다.
5. 사용자로부터 당첨 번호를 입력 받는다.
   - 당첨 번호는 중복되지 않는 숫자 6개이다.
   - 로또 번호의 숫자 범위는 1~45이다.
   - 당첨 번호 유효성 검사를 한다.
     - 중복되는 숫자가 있는지
     - 뽑힌 번호가 6개가 맞는지
     - 숫자가 맞는지
     - 숫자 범위 내의 숫자 인지
     - 쉼표(,)를 기준으로 구분되는지
     - 빈칸이 있는지
6. 사용자로부터 보너스 번호를 입력 받는다.
   - 보너스 번호는 1개이다.
   - 보너스 번호 유효성 검사를 한다.
     - 보너스 번호가 당첨 번호 6개와 중복되는지
     - 숫자인지
     - 1개인지
     - 숫자 범위 내의 숫자 인지
     - 빈칸인 경우
7. 당첨 기준에 따라 추첨을 하고 당첨 내역을 출력한다.
8. 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역을 출력한다.
9. 수익률을 출력하고 로또 게임을 종료한다.
   - 수익률 = (로또 게임으로 얻은 총 수익) / (로또 구입 금액)
   - 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

## 🚀 기능 리스트

- 로또 실행 결과 예시

  ```jsx
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

### 1. 사용자로부터 로또 구입 금액을 입력 받기

- 구입 금액은 1,000원 단위로 입력 받는다.
- 입력 형식
  ```jsx
  구입금액을 입력해 주세요.
  14000
  ```

### 2. 입력받은 로또 구입 금액으로부터 발행한 로또 수량 구하기

- 로또 1장의 가격이 1,000원이므로, 1,000으로 나누면 수량을 구할 수 있다.

### 3. 사용자가 발행한 로또 수량만큼 로또 발행

- 로또 번호의 숫자 범위는 1~45이다.
- 1개의 로또를 발행할 때는 중복되지 않는 6개의 숫자를 뽑는다.

### 4. 사용자가 발행한 로또 수량과 번호를 출력

- 출력 형식
  ```jsx
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

### 5. 사용자로부터 당첨 번호를 입력받기

- 로또 번호의 숫자 범위는 1~45까지이다.
- 당첨 번호는 중복되지 않는 숫자 6개이다.
- 입력 형식 (번호는 쉼표(,)를 기준으로 구분한다.)
  ```jsx
  당첨 번호를 입력해 주세요.
  1,2,3,4,5,6
  ```
- `@woowacourse/mission-utils`에서 제공하는 `Random` API를 사용하여 구현한다.
  - 사용 예시
    ```jsx
    // 1에서 45 사이의 중복되지 않은 정수 6개 반환
    MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    ```

### 6. 사용자로부터 보너스 번호를 입력 받기

- 로또 번호의 숫자 범위는 1~45까지이다.
- 이전에 입력된 당첨 번호 6개와 중복되지 않는 숫자 1개이다.
- 입력 형식
  ```jsx
  보너스 번호를 입력해 주세요.
  7
  ```
- `@woowacourse/mission-utils`에서 제공하는 `Random` API를 사용하여 구현한다.
  - 사용 예시
    ```jsx
    // 1에서 45까지의 정수 중 한 개의 정수 반환
    MissionUtils.Random.pickNumberInRange(1, 45);
    ```

### 7. 로또 추첨을 하고 당첨 내역을 출력

- [당첨 기준 / 금액]
  - 당첨은 1등부터 5등까지 있다.
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원
- 출력 형식
  ```jsx
  당첨 통계
  ---
  3개 일치 (5,000원) - 1개
  4개 일치 (50,000원) - 0개
  5개 일치 (1,500,000원) - 0개
  5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  6개 일치 (2,000,000,000원) - 0개
  ```

### 8. 수익률을 구하고 출력

- 수익률 = (로또 게임으로 얻은 총 수익) / (로또 구입 금액)
- 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)
- 출력 형식
  ```jsx
  총 수익률은 62.5%입니다.
  ```

### 9. 종료

## 🚨  예외 테스트

- 사용자가 잘못된 값을 입력할 경우 `[ERROR]` 로 시작하는 메시지와 함께 `Error` 를 발생시킨 후 애플리케이션을 종료한다.
  - 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.
    ```jsx
    [ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
    ```

### 1. 입력받은 로또 구입 금액 예외처리

- 금액이 양수가 아닌 경우
  ```jsx
  예) -1000, abc, 0
  ```
- 1,000원으로 나누어 떨어지지 않는 경우
  ```jsx
  예) 15,200, 1,500
  ```

### 2. 입력받은 당첨 번호 예외 처리

- 당첨 번호 중 숫자가 범위(숫자 1~45)내에 있지 않은 경우
  ```jsx
  예) 58, -3
  ```
- 당첨 번호 중 숫자가 양수가 아닌 경우
  ```jsx
  예) -1000, abc, 0
  ```
- 중복되는 숫자가 있는 경우
  ```jsx
  예) 2,2,3,5,6,4
  ```
- 입력된 당첨 번호가 6개 아닌 경우
  ```jsx
  예) 2,4,3,5,6,12,24,35
  ```
- 쉼표(,)가 아닌 다른 문자가 있는 경우
  ```jsx
  예) 2a4,3,5$6,12
  ```
- 빈칸이 있는 경우
  ```jsx
  예)
  2,,3,5,6,12
  2,4,3,5,6,12,
  2,4,3,5,6,
  ```

### 3. 입력받은 보너스 번호 예외 처리

- 당첨 번호 중 숫자가 범위(숫자 1~45)내에 있지 않은 경우
  ```jsx
  예) 58, -3
  ```
- 당첨 번호 중 숫자가 양수가 아닌 경우
  ```jsx
  예) -1000, abc, 0
  ```
- 당첨 번호 6개와 중복될 경우
  ```jsx
  예)
  당첨번호 : 2,23,3,5,6,4
  보너스 번호 : 2
  ```
- 입력된 당첨 번호가 1개 아닌 경우
  ```jsx
  예) 2,4,3
  ```
- 빈칸인 경우
  ```jsx
  예) '',
  ```

## 🧑‍🎨  디자인

- mvc 패턴에 따른 설계
  ### 1. **Model**
  ### 2. **View**
  ### 3. **Controller**
