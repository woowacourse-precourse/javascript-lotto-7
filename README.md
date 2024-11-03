# javascript-lotto-precourse

## 프로그램 소개

사용자가 로또를 구매할 수 있고, 당첨번호를 입력하여 구매한 로또가 당첨되었는지 확인할 수 있는 로또 발매기 프로그램입니다.

## 주요 기능

### 고려사항

- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시키고 해당 메시지를 출력한 **다음 해당 지점부터 다시 입력을 받는다.**
- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
    - 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
- else를 지양한다.
    - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
- 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI(System.out, [System.in](http://system.in/), Scanner) 로직은 제외한다.
- 클래스 생성자 # 사용 → 2주차 피드백 반영
- 입출력, 에러 메세지 상수화 

### 입력 기능

- 로또 구매 기능
    - [x] 로또 구입 금액을 입력받음
    - [x] 구입 금액에 해당하는 만큼 로또 발행
    - [x] 로또 1장 가격은 1000원으로 설정
    - [x] 구입 금액은 1,000원 단위만 입력 가능 

- 당첨 번호를 입력 하는 기능
    - [x] 숫자와 쉼표만 입력 가능 → ex ) 1,2,3,4,5,6
    - [x] 숫자 6자리 입력 받음
    - [x] 번호는 쉼표를 기준으로 구분
    - [x] 로또 번호의 숫자 범위는 1~45로 설정

        
- 보너스 번호를 입력하는 기능
    - [x] 입력 받음
    - [x] 정수만 입력가능
    - [x] 로또 번호의 숫자 범위는 1~45로 설정

### 출력 기능

- 로또 번호 발행 기능
    - [x] 로또 번호의 숫자 범위는 1~45
    - [x]  로또 1개 발행시 , 중복되지 않는 숫자 6개
    - [x] 리스트 안에 로또 1세트 넣음 → ex) [8, 21, 23, 41, 42, 43] 
    - [x] 리스트의 로또 번호는 오름차순으로 정렬
    
- 발행한 로또 수량 및 번호 출력 기능
    - [x] 아래의 양식에 맞게 출력
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
    

- 당첨인지 확인하는 기능
    - [x] 당첨은 1등부터 5등까지 존재
    - [x] 당첨 기준 설정
        - 1등: 6개 번호 일치 / 2,000,000,000원
        - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
        - 3등: 5개 번호 일치 / 1,500,000원
        - 4등: 4개 번호 일치 / 50,000원
        - 5등: 3개 번호 일치 / 5,000원
    - [x] 각각의 로또 번호를 확인하여 당첨 기준에 맞게 분류 
        
- 당첨 내역 출력 기능
    - [x] 아래의 양식에 맞게 5등부터 1등순으로 출력
    
    ```jsx
    당첨 통계
    ---
    3개 일치 (5,000원) - 1개
    4개 일치 (50,000원) - 0개
    5개 일치 (1,500,000원) - 0개
    5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
    6개 일치 (2,000,000,000원) - 0개
    ```
    
- 수익률을 계산하는 기능
    - [x] 수익률은 소수점 둘째 자리에서 반올림 → (ex. 100.0%, 51.5%, 1,000,000.0%)

- 수익률을 출력 하는 기능
    - [x] 아래의 양식에 맞게 출력
    ```
    
    총 수익률은 62.5%입니다.
    ```

### 예외 처리

- 로또 구매금액 입력시
    - [x] 실수 입력 → 1000.00 → [ERROR]
    - [x] 문자열 입력 → '1000' → [ERROR]
    - [x] 1000원 단위로 떨어지지 않는 금액 입력 → 1010 → [ERROR]
    
- 당첨 번호 입력시 
    - [ ] 쉼표 먼저 입력 → ,1,2,3,4,5,6 → [ERROR]
    - [ ] 숫자 6자리 초과 → 1,2,3,4,5,6,7 → [ERROR]
    - [ ] 쉽표 포함 입력 길이가 17 초과 → 11,22,33,41,35,36,→ [ERROR]
    - [ ] 1~45 범위를 벗어난 숫자 입력 → 12,46,2,3,4,5 → [ERROR]
    - [ ] 쉼표 외 다른 구분자를 입력한 경우 → 1;2;3;4;5;6 → [ERROR]
    - [ ] 쉼표 와 다른 구분자를 입력한 경우 → 1,2,3,4;5,6 → [ERROR]
    - [ ] 중복된 숫자를 입력한 경우 → 11,22,11,4,5,6 → [ERROR]

- 보너스 번호 입력시
    - [ ] 실수 입력 → 10.0 → [ERROR]
    - [ ] 문자열 입력 → '10' → [ERROR]
    - [ ] 1~45 범위를 벗어난 숫자 입력 → 80 → [ERROR]

### 기능 테스트 

