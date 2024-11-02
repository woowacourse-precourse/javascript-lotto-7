# javascript-lotto-7
## 📝 소개
사용자에게 로또 구입 금액 및 당첨 번호를 받고, 구입 금액에 따른 로또 발행 및 당첨 내역을 출력한다.

## 기능 목록
> **입력값 받기**

  - **로또 구입 금액**
    - 가격은 1000원 단위이다.
    - 예외처리
      - 1000원으로 나누어 떨어지지 않는 경우 예외처리를 한다.  
      - 1000원 이하의 금액을 입력하는 경우 예외처리를 한다.
      - 숫자가 아닌 경우 예외처리를 한다.  
    <br/>
  - **당첨 번호 6개**
    -  로또 번호의 범위는 1~45이다.
    -  쉼표를 기준으로 6개의 번호를 입력받는다.
      
       ```
       ex) 1,2,3,4,5,6
       ```
     - 예외처리
       - 입력값이 1~45를 벗어나는 경우 예외처리를 한다.
       - 소수점을 가지는 경우 예외처리를 한다.
       - 입력값이 6개가 아닌 경우 예외처리를 한다.
       - 숫자와 쉼표가 아닌 값이 있는 경우 예외처리를 한다.
    <br/>     
  - **보너스 번호 1개**
    - 로또 번호의 범위는 1~45이다.
    - 1개의 번호를 입력받는다.
    - 예외처리
      - 입력값이 1~45를 벗어나는 경우 예외처리를 한다.
       - 소수점을 가지는 경우 예외처리를 한다.
       - 입력값이 1개가 아닌 경우 예외처리를 한다.
       - 숫자가 아닌 값이 있는 경우 예외처리를 한다.
---
>  **로또 발행하기**  


- 로또 번호의 범위는 1~45이다.
- 구입에 해당하는 만큼 로또를 발행한다. 예를 들어 20000원이면 2개를 발행한다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
---

>  **당첨 계산하기**
- 사용자가 입력한 번호와 각각의 로또 번호를 비교하여 당첨 내역 및 수익률을 계산한다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원
---

> **출력하기**
- 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.
```
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
```
총 수익률은 62.5%입니다.
```
- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.
```
[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
```
- 실행 결과 예시
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
