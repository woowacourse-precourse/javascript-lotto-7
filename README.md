# javascript-lotto-precourse

# 로또 발매기

## 소개
금액에 맞는 개수의 로또를 발행하고 당첨 번호 및 보너스 번호와 비교하여 당첨 현황을 산출한다.  
이를 토대로 발행된 로또별 당첨 결과를 공지하고, 최종 당첨금 총액과 그에 따른 수익률을 계산하여 사용자에게 제공하는 로또 발매기를 구현한다

### 기능 구현 목록
- [x] 로또 구입 금액 입력
     - 로또 구입 금액을 입력받고, 이를 토대로 구매 가능한 로또 개수를 산출한다.
       - 예외 사항1: 구입 금액이 1000원 단위가 아닌 경우
       - 예외 사항2: 입력 값이 양의 정수가 아닌 경우

- [x] 로또 번호 발행
     - 금액에 맞는 개수의 로또를 발행하며, 로또 번호는 중복을 허용하지 않고 1부터 45사이의 숫자로 지정한다  
       - 예외 사항1: 중복되는 숫자로 로또 번호가 구성되는 경우

- [x] 로또 종이 출력
     - 구매한 로또의 개수와 각 로또별 번호 구성을 오름차순으로 출력한다.  

- [x] 로또 당첨 번호 입력
     - 당첨에 해당하는 로또 번호를 입력받으며, 각 숫자는 쉼표(,)로 구분한다.
       - 예외 사항1: 입력 받은 번호가 쉼표(,)로 구분했을 때 6개가 아닌 경우
       - 예외 사항2: 중복된 번호가 포함되어 있는 경우
       - 예외 사항3: 양의 정수가 아닌 경우
       - 예외 사항4: 각 숫자가 1부터 45사이의 숫자가 아닌 경우

- [x] 보너스 번호 입력
     - 보너스 번호를 입력받는다. 이는 1부터 45사이의 숫자로 당첨 번호와 중복되지 않도록 한다.
       - 예외 사항1: 보너스 번호가 1부터 45사이의 숫자가 아닌 경우 
       - 예외 사항2: 보너스 번호가 당첨 번호와 중복되는 경우      

- [x] 당첨 결과 계산
     - 구매한 로또의 번호를 당첨 번호 및 보너스 번호와 비교하여 당첨 등수를 산출한다.

- [x] 당첨 결과 출력
     - 구매한 로또의 등수별 당첨 상황을 출력한다. 등수는 1등부터 5등으로 구성하고 등수별 상금을 표기한다.
    
- [x] 수익률 계산 및 출력
     - 구입 금액 대비 당첨금 총액에 대한 수익률을 산출하며, 소수점 둘째 자리에서 반올림하여 출력한다.

- [x] 예외 처리
     - 잘못된 값을 입력받은 경우 [ERROR]로 시작하는 메시지를 출력하고 프로그램을 종료한다. 


### 프로그래밍 요구사항
- [x] 프로그램 종료 시 process.exit()를 호출하지 않는다.
- [x] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- [x] 3항 연산자를 쓰지 않는다.
- [x] 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
- [x] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
     - 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI(System.out, System.in, Scanner) 로직은 제외한다.


## 입력 요구사항
#### 입력1: 로또 구입 금액[1000원 단위, 1장/1천원]
e.g. 14000  
#### 입력2: 당첨 번호[6자리, 쉼표(,)로 구분]
e.g. 1,2,3,4,5,6  
#### 입력3: 보너스 번호[1자리]
e.g. 7  

## 출력 형태
#### 로또 수량 및 번호[로또 번호는 '오름차순' 정렬]
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]  
...  
[1, 3, 5, 14, 22, 45]  
#### 당첨 내역
3개 일치 (5,000원) - 1개  
4개 일치 (50,000원) - 0개  
5개 일치 (1,500,000원) - 0개  
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개  
6개 일치 (2,000,000,000원) - 0개  
#### 수익률[소수점 둘째 자리 반올림]
총 수익률은 62.5%입니다.  
#### 예외 상황 시 에러 문구
[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.  