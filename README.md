# javascript-racingcar-precourse

---

## 3주차: 로또

### 📌 개요

로또 발매기 구현

### 📋 기능 목록

1. **입력 기능**

   - 로또 구입 **금액** 입력(`1,000원` 단위)

   - **중복되지 않는 당첨 번호** 6개 입력(`,` 기준 구분), 로또 숫자 범위는 `1~45`

   - **보너스 번호** 입력

2. **로또 발행 기능**

   - 입력한 금액 기준으로 구매 가능한 로또 수량 계산(1000원/장)
   - **중복되지 않은 무작위 6개 번호** 생성(범위는 `1~45`)
   - 발행된 로또 번호를 **정렬**

3. **로또 당첨 번호 생성**

   - 문자열 형식의 당첨 번호를 숫자 배열로 파싱

4. **당첨 확인 기능**

   - 1등 : **6개 번호**일치, **2,000,000,000원**
   - 2등 : **5개 번호**일치 + **보너스 번호** 일치, **30,000,000원**
   - 3등 : **5개 번호**일치, **1,500,000원**
   - 4등 : **4개 번호**일치, **50,000원**
   - 5등 : **3개 번호**일치, **5,000원**

5. **수익률 계산**

   - **총 수익 상금(등수별 당첨 횟수 X 등수별 금액)** 계산
   - **수익률(총 상금 / 로또 구입 금액 X 100)** 계산 후 소수점 둘째 자리에서 반올림

6. **출력**

   - 발행한 로또 수량 및 번호 출력, 로또 번호 **오름차순** 정렬

   - **당첨 내역** 및 **수익률** 출력

7. ⚠️ **예외 처리**
   - 잘못된 구입 금액 입력
     - 양수가 아닌 값 입력(음수, 문자열, 소수...)
     - 금액 단위가 1,000원이 아닌 경우
   - 중복되는 당첨 번호 입력
   - 잘못된 보너스 번호 입력
     - 음수, 범위가 아닌 숫자, 문자열...
     - 중복된 번호
   - 로또 발행시 6개 초과 입력
