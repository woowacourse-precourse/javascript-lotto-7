<p align="center">
  <img src="https://i.ibb.co/D1CHbsB/logo-dark.png" width=300 alt="우아한프리코스"/>
</p>

# 프리코스 3주차 - 로또

### 목차

[🛠️ 기능 목록](#️-기능-목록) &nbsp;
[✏️ 추가 정의 사항](#️-추가-정의-사항) &nbsp;
[⚠️ 에러 상황](#️-에러-상황) &nbsp;
[🖥️ 실행 결과 예시](#️-실행-결과-예시)

<br/>

## 🛠️ 기능 목록

### 로또 개요

1. 로또 번호의 숫자 범위는 **1 ~ 45**이다.

2. 1개의 로또를 발행할 때 **중복되지 않는 6개의 숫자**를 뽑는다.
3. 당첨 번호 추첨 시 **중복되지 않는 숫자 6개**와 **보너스 번호 1개**를 뽑는다.
4. 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
   <br/>- 1등: 6개 번호 일치 / 2,000,000,000원
   <br/>- 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
   <br/>- 3등: 5개 번호 일치 / 1,500,000원
   <br/>- 4등: 4개 번호 일치 / 50,000원
   <br/>- 5등: 3개 번호 일치 / 5,000원

### 기능 Flow

1. 1,000원 단위의 **로또 구입 금액**을 입력받는다. 로또 1장 가격은 1,000원이다.

2. **발행한 로또 수량**을 출력한다. 구입 금액에 해당하는 만큼 로또를 발행해야한다.
3. 발행한 로또들의 **로또 번호**를 출력한다. 로또 번호는 1에서 45 사이의 중복되지 않은 랜덤한 정수 6개이다. 오름차순으로 출력한다.
4. **당첨 번호 6개**를 입력받는다. 번호는 쉼표(,)를 기준으로 구분한다.
5. **보너스 번호 1개**를 입력받는다.
6. 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 **당첨 내역**을 출력한다.
7. **수익률**을 소수점 둘째 자리에서 반올림하여 출력한다.<br/>$수익률 = \frac{당첨  금액}{구입  금액} \times 100$
8. 위 과정 중 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고,<br/>해당 메시지를 출력한 다음 **해당 지점부터 다시 입력**을 받는다.

<br/>

## ✏️ 추가 정의 사항

1. 당첨 번호 입력 시 쉼표 사이의 공백은 허용하지 않는다.<br/>예: 1, ,2,3
2. 당첨 번호 입력 시 쉼표와 숫자 사이의 공백은 허용한다.<br/>예: 1, 2, 3

<br/>

## ⚠️ 에러 상황

1. 로또 구입 금액이 1,000원 단위의 숫자가 아닌 경우

2. 당첨 번호, 보너스 번호가 1에서 45 사이의 정수가 아닌 경우
3. 당첨 번호가 6개가 아닌 경우
4. 당첨 번호에 중복이 있는 경우
5. 당첨 번호 중 하나와 보너스 번호가 중복인 경우
6. 당첨 번호 입력에 쉼표, 숫자 외에 다른 문자가 있는 경우(공백 불허)

<br/>

## 🖥️ 실행 결과 예시

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
