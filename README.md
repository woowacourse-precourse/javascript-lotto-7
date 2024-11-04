# javascript-lotto-precourse
로또 발매기가 동작하는 프로세스입니다. 각 단계마다 필요한 **기능**과 유효한 입력, 그리고 유효하지 않아 **예외 처리**가 필요한 값 목록을 정리하였습니다.
## 로또 발매기 프로세스
### 1. 구입 금액을 천 원 단위로 입력 받는다.
#### 예시
```
구입금액을 입력해 주세요.
8000
```
#### 필요한 기능  
- 구입 금액 입력
- 예외 처리
#### 유효한 입력
- `1000`으로 나누어 떨어지는 양의 정수
#### 예외 처리할 입력

- 문자
- 빈 값 (공백 포함)
- 소수
- `1000` 미만의 수
- `1000`으로 나누어 떨어지지 않는 수

<br>

---
### 2. 발행한 로또 수량을 출력하고, 로또 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.
#### 예시
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
#### 필요한 기능
- 로또 수량 출력
- 로또 번호 발행
- 로또 번호 정렬
- 로또 번호 출력

<br>

---
### 3. 당첨 번호와 보너스 번호를 입력 받는다.
#### 예시
```
당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7
```
#### 필요한 기능 

- 당첨 번호 입력
- 보너스 번호 입력
- 예외 처리
#### 유효한 입력
- `1`부터 `45` 사이의 중복되지 않는 `7`개의 정수 
#### 예외 처리할 입력
- 문자
- 빈 값 (공백 포함)
- 소수
- `1`부터 `45` 범위 안에 있지 않은 숫자
- `6`개 / `1`개의 숫자가 입력되지 않았을 경우
- 숫자가 중복되는 경우

<br>

---
### 4. 당첨 내역을 출력하고, 총 수익률을 출력한다.
#### 예시
```
당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```
#### 필요한 기능

- 당첨 내역 집계
- 당첨 내역 출력
- 수익률 계산
- 수익률 출력

<br>

## 구현 방식
`Lotto` 클래스를 개별 로또로 생각하고, 각 로또를 발행하는 로또 발매기 객체 `LottoMachine`을 정의하였습니다.   
`LottoMachine` 객체는 구입 금액, 로또 수량, 당첨 번호 등 로또 게임에 필요한 정보들과 이를 구하고 처리하는 함수를 프로퍼티로 가집니다.   
`App`에서는 `LottoMachine`에 접근하고, `LottoMachine`은 `Lotto` 인스턴스에 접근하는 방식으로 구현하였습니다.

<br>

## 함수 / 메서드 기능 분리 기준
App에서 호출하는 함수가 연쇄적인 실행이 필요한 다른 함수들을 호출하되, 최대한 한 가지 기능을 수행하도록 하였습니다.   
함수는 `이름`에 언급된 작업을 `역할`으로 보고, 함수의 본 역할에서 벗어난 작업들은 다른 함수를 `호출`해서 실행하도록 하였습니다.