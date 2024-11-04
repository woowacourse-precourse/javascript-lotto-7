# 로또

> **로또 프로그램은 입력한 금액만큼 복권을 발행하고, 당첨 금액과 보너스 번호를 설정해 당첨 통계 및 총 수익률을 출력하는 프로그램이다.**

## 🔧 기능 목록

### 기능 1: 로또 발행
> **구입 금액을 입력받아 로또횟수만큼 로또를 발행하고 그 결과를 출력한다.**

📋 **세부 사항**

- **로또 횟수 계산**

  - 숫자를 1000으로 나누어 로또 횟수를 계산한다.
  - 1000으로 나누어 떨어지지 않는 경우 예외 처리한다.
  - 입력값: 정수
  - 반환 형식
    - 정수형 숫자를 반환한다.

- **로또 발행**
  - 로또 횟수 만큼 로또를 발행한다.
  - 로또는 1~45 중에서 중복되지 않는 6개의 숫자다. 
  - 입력값: 정수
  - 반환 형식
    - [숫자, List<Lotto>] 형식으로 반환   


### 기능 2: 로또 통계
> **당첨 번호와 보너스 번호를 입력받아 로또 리스트와 대조하여, 당첨 갯수를 확인하고, 수익률을 계산한다.**

📋 **세부 사항**

- **로또 당첨 숫자 계산**

  - 당첨 번호와 보너스 번호를 입력받고, 로또 번호 중 몇개가 일치하는 지 판단한다. 
  - 당첨 번호가 5개 일치하고, 보너스까지 일치한다면 "BONUS" 다.
  - 입력값: List<number>, 정수
  - 반환 형식
    - Map(<number, number>)

- **로또 당첨 금액 계산**
  - 당첨 등수 Map을 순회해 당첨 금액을 계산한다.  
  - 해당 rank에 맞는 금액을 딕셔너리에서 찾는다. 
  - 이때 계산은 `당첨 금액 * 당첨 인원`이다. 
  - 입력값: Map(<number, number>)
  - 반환 형식
    - 정수

- **총 수익률 계산**
  - 당첨 금액과 구매 금액으로 총 수익률을 계산한다.
  - 이때 계산은 `(당첨 금액 / 구매 금액) * 100`이다. 
  - 수익률은 소숫점 둘째 자리에서 반올림한다. 
  - 총 수익률 뒤에 `%`를 붙여 반환한다. 
  -입력값: 정수, 정수
  - 반환 형식
    - 문자열

### 기능 3: 당첨 결과 출력
> **로또 등수와 수익률을 받아 로또 결과를 출력한다.**

📋 **세부 사항**

- **당첨 결과 출력**
  
  - 당첨 통계와 총 수익률을 활용해 로또 결과를 출력한다.  
  - 입력값: Map<number, number>, 문자열


## 🔍 입출력 요구 사항

### 입력

- 로또 구입 금액

  - 구입 금액은 1,000원 단위로 입력 받는다.
  - 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.

  ```
  14000
  ```

- 당첨 번호

  - 번호는 쉼표(,)를 기준으로 구분한다.

  ```
  1,2,3,4,5,6
  ```

- 보너스 번호

  - 숫자를 입력한다.

  ```
  7
  ```

### 출력

- 발행한 로또 수량 및 번호

  - 로또 번호는 오름차순으로 정렬한다.

  ```
  2개를 구매했습니다.
  [8, 21, 23, 41, 42, 43]
  [3, 5, 11, 16, 32, 38]
  ```

- 당첨 내역

  ```
  3개 일치 (5,000원) - 1개
  4개 일치 (50,000원) - 0개
  5개 일치 (1,500,000원) - 0개
  5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  6개 일치 (2,000,000,000원) - 0개
  ```

- 수익률

  - 소수점 둘째 자리에서 반올림한다.

  ```
  총 수익률은 62.5%입니다.
  ```

- 예외 사항

  - 예외 사항은 `[ERROR]`로 시작한다.


