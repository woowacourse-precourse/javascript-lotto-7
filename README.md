# javascript-lotto-precourse

# 로또 게임

## ✅ 기능 목록

### 로또 구매 기능

- [x] 로또 구매 금액 입력 받기
  - [x] 입력 받은 금액에 따라 로또 발행 수량 계산 (1,000원 단위)
  - [x] 구매한 로또 수량 출력하기
  - [x] 발행된 로또 번호 출력하기 (오름차순 정렬)
- [x] 로또 번호 자동 생성
  - [x] 1~45 사이의 무작위 숫자 6개 선택
  - [x] 중복되지 않는 번호로 생성

### 당첨 번호 입력 기능

- [x] 당첨 번호 6개 입력 받기
  - [x] 쉼표(,)로 구분된 숫자 입력받기
  - [x] 입력된 번호 검증하기
- [x] 보너스 번호 1개 입력 받기
  - [x] 당첨 번호와 중복되지 않는 숫자 검증하기

### 당첨 확인 및 통계 출력 기능

- [x] 구매한 로또와 당첨 번호 비교하기
- [x] 당첨 등수 별 개수 출력하기
  - [x] 1등: 6개 번호 일치
  - [x] 2등: 5개 번호 + 보너스 번호 일치
  - [x] 3등: 5개 번호 일치
  - [x] 4등: 4개 번호 일치
  - [x] 5등: 3개 번호 일치
- [x] 수익률 계산하여 출력하기 (소수점 둘째 자리에서 반올림)
  - [x] 수익률 계산 기능

## 🚨 예외 처리 목록

### 로또 구매 금액 예외

- [x] 금액이 숫자가 아닌 경우
- [x] 금액이 1,000원으로 나누어떨어지지 않는 경우
- [x] 금액이 0 이하인 경우

### 당첨 번호 입력 예외

- [x] 숫자가 아닌 값이 포함된 경우
- [x] 6개의 숫자가 입력되지 않은 경우
- [x] 중복된 숫자가 있는 경우
- [x] 1~45 범위를 벗어난 숫자가 있는 경우
- [x] 쉼표(,) 구분이 잘못된 경우

### 보너스 번호 입력 예외

- [x] 숫자가 아닌 경우
- [x] 1~45 범위를 벗어난 경우
- [x] 당첨 번호와 중복된 경우

## 🧪 테스트 체크리스트

### 로또 도메인 테스트
- [x] 로또 번호 검증
  - [x] 번호 개수 검증 (6개)
  - [x] 번호 범위 검증 (1-45)
  - [x] 중복 번호 검증
  - [x] 숫자 타입 검증
  - [x] 문자열 입력 검증
  - [x] null/undefined 입력 검증
- [x] 로또 기능 검증
  - [x] 번호 정렬 기능
  - [x] 당첨 번호 매칭
  - [x] 보너스 번호 매칭
  

### 입력값 검증 테스트
- [x] 구매 금액 검증
  - [x] 숫자가 아닌 입력
  - [x] 1000원 단위가 아닌 금액
  - [x] 음수 금액
  - [x] 0원 금액
- [x] 당첨 번호 검증
  - [x] 잘못된 쉼표 형식 ("1,,2", ",1,2", "1,2,")
  - [x] 공백 포함 ("1, 2, 3")
  - [x] 숫자가 아닌 값
  - [x] 중복된 당첨 번호
- [x] 보너스 번호 검증
  - [x] 숫자가 아닌 값
  - [x] 범위 벗어난 값
  - [x] 당첨 번호와 중복

### 로직 테스트
- [x] 당첨 결과 계산
  - [x] 1등 당첨 케이스
  - [x] 2등 당첨 케이스 (보너스 번호 포함)
  - [x] 3등-5등 당첨 케이스
  - [x] 미당첨 케이스
- [x] 수익률 계산
  - [x] 소수점 둘째 자리 반올림 검증

## 🔧 리팩토링 체크리스트

### 코드 구조화
- [x] MVC 패턴 적용
  - [x] Model(Lotto, LottoGame)
  - [x] View(Input, Output)
  - [x] Controller(App)
- [x] 상수 분리
  - [x] 에러 메시지
  - [x] 로또 설정값
  - [x] 당첨금액
- [x] 유틸리티 분리
  - [x] 입력값 검증
  - [x] 번호 생성
  - [x] 당첨 계산

### 클린 코드
- [x] 함수 분리
  - [x] 15라인 이하 유지
  - [x] 단일 책임 원칙 준수
- [x] 조건문 개선
  - [x] else 제거
  - [x] 조건문 단순화
- [x] 명명 규칙 정리
  - [x] 변수명 명확화
  - [x] 메서드명 직관성

### 패키지 구조화
- [x] 도메인 패키지
  - [x] Lotto.js
  - [x] LottoGame.js
- [x] 뷰 패키지
  - [x] InputView.js
  - [x] OutputView.js
- [x] 상수 패키지
  - [x] Error.js
  - [x] LottoConfig.js
  - [x] Message.js

## 📝 프로그래밍 요구사항 체크리스트

### 코드 컨벤션
- [x] 함수 길이 15라인 제한
- [x] else 키워드 사용 지양
- [x] indent depth 2 이하 유지
- [x] 함수는 한 가지 책임만 가지도록 구현

### 단위 테스트
- [x] UI 로직을 제외한 모든 로직에 대한 단위 테스트 구현
- [x] 테스트 코드를 통해 프로덕션 코드 검증