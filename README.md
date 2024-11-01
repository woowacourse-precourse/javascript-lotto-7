# javascript-lotto-precourse

# 기능 목록

| 우선순위 | 작업            |
| -------- | --------------- |
| 🔴       | 명시된 요구사항 |
| 🟡       | 추가 예외케이스 |

## 입력

- [ ] 🔴 로또 구입 금액을 입력 받는다.
    - [ ] 🔴 `“구입금액을 입력해 주세요.”` 출력
    - [ ] 🔴 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
    - [ ] 🔴 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.
- [ ] 🔴 당첨 번호를 입력 받는다.
    - [ ] 🔴 `"당첨 번호를 입력해 주세요."` 출력
    - [ ] 🔴 번호는 쉼표(,)를 기준으로 구분한다.
    - [ ] 🔴 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.
- [ ] 🔴 보너스 번호를 입력 받는다.
    - [ ] 🔴 `"보너스 번호를 입력해 주세요."` 출력
    - [ ] 🔴 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.


## 로또
- [x] 🔴 로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.
- [x] 🔴 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.

## 로또판매점
### 로또 구매
- [x] 🔴 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- [x] 🔴 로또 1장의 가격은 1,000원이다.

### 로또 발행
- [x] 🔴 로또 번호의 숫자 범위는 1~45까지이다. 로또 장수만큼 로또를 생성한다.


## 당첨

### 당첨 번호 추첨

- [ ] 🔴 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.

### 당첨 금액

- [ ] 🔴 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - [ ] 🔴 1등: 6개 번호 일치 / 2,000,000,000원
    - [ ] 🔴 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - [ ] 🔴 3등: 5개 번호 일치 / 1,500,000원
    - [ ] 🔴 4등: 4개 번호 일치 / 50,000원
    - [ ] 🔴 5등: 3개 번호 일치 / 5,000원

### 당첨 여부 확인
- [ ] 🔴 사용자가 구매한 로또 번호와 당첨 번호를 비교한다.
    - [ ] 🔴 번호가 당첨 번호 중 하나인지 확인한다.
    - [ ] 🔴 번호가 보너스 번호와 일치하는지 확인한다.
    - [ ] 🔴 사용자가 구매한 로또 번호가 당첨 번호와 몇 개 일치하는지 확인하고 등수를 매긴다.
    


## 출력

- [ ] 🔴 발행한 로또 수량 및 번호를 출력한다.
    - [ ] 🔴 발행한 로또 수량 출력
    - [ ] 🔴 발행한 로또 번호 출력
    - [ ] 🔴 로또 번호는 오름차순으로 정렬하여 보여준다.
    
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
    
- [ ] 🔴 당첨 내역을 출력한다.
    - [ ] 🔴 `"당첨 통계\n---"` 출력
    - [ ] 🔴 당첨 내역 출력
    
    ```jsx
    3개 일치 (5,000원) - 1개
    4개 일치 (50,000원) - 0개
    5개 일치 (1,500,000원) - 0개
    5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
    6개 일치 (2,000,000,000원) - 0개
    ```
    
- [ ] 🔴 수익률은 소수점 둘째 자리에서 반올림하여 출력한다.
    
    ```jsx
    총 수익률은 62.5%입니다.
    ```