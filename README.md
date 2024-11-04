# 🎰 JavaScript Lotto Precourse

## 📂 폴더 구조

### src
- 📂 config // 애플리케이션 전역 설정과 상수
  - errors.js // 에러 메시지 상수
  - lottoConfig.js // 로또 기본 설정 값 (예: 가격)
  - messages.js // 출력 및 입력 메시지 상수
- 📂 controllers // 애플리케이션 로직을 제어하는 컨트롤러
  - LottoController.js // 로또 발매기 컨트롤러
- 📂 models // 데이터와 비즈니스 로직을 처리하는 모델
  - Lotto.js // 로또 모델 (번호 저장 및 관리)
  - LottoResult.js // 로또 당첨 결과 모델
- 📂 services // 비즈니스 로직을 처리하는 서비스 계층
  - LottoService.js // 로또 생성 및 결과 확인 서비스
- 📂 utils // 공통 유틸리티 및 검증 함수
  - validators.js // 입력값 검증 유틸리티
  - formatter.js // 포매팅 유틸리티 (예: 숫자 콤마 포맷)
- 📂 views // 사용자 입출력 처리 뷰 컴포넌트
  - InputView.js // 사용자 입력을 처리하는 뷰
  - OutputView.js // 결과 출력을 처리하는 뷰
- App.js // 애플리케이션 초기화 및 실행 담당
- index.js // 애플리케이션 진입점

### tests
- LottoTest.js // Lotto 클래스 단위 테스트
- LottoServiceTest.js // LottoService 클래스 단위 테스트
- InputViewTest.js // InputView 테스트
- OutputViewTest.js // OutputView 테스트
- ApplicationTest.js // 통합 테스트 (전체 애플리케이션 시나리오)


## 📋 구현 기능 목록

### Constants

- [x] 에러 메시지 상수 정의
- [x] 로또 기본 설정 값 (로또 가격, 당첨 등급 및 금액 등)
- [x] 출력 및 입력 메시지 포맷 정의

### Views 구현

#### InputView 클래스

- [x] 구매 금액 입력 처리 (`Console.readLineAsync()` 사용)
  - [x] 1,000원 단위로 나누어 떨어지지 않는 경우 예외 처리
- [x] 당첨 번호 입력 처리
  - 중복되지 않는 숫자 6개 입력
  - 범위: 1 ~ 45
- [x] 보너스 번호 입력 처리
  - 범위: 1 ~ 45
  - 숫자 유효성 검사

#### OutputView 클래스

- [x] 구매한 로또 수량 출력
- [x] 생성된 로또 번호 출력 (오름차순 정렬)
- [x] 당첨 통계 출력
  - 각 등수별 당첨 개수 및 당첨금 출력
- [x] 총 수익률 출력 (소수점 첫째 자리까지)
- [x] 에러 메시지 출력

### Models

#### Lotto 클래스

- [x] 6개의 로또 번호 저장 및 관리
- [x] 번호 유효성 검증 (중복, 범위 등)
- [x] 번호 오름차순 정렬 메소드

#### LottoResult 클래스

- [x] 당첨 결과 저장 및 등수 계산
- [x] 등수에 따른 당첨금 계산

### Services

#### LottoService 클래스

- [x] 로또 번호 생성 (`Random.pickUniqueNumbersInRange()` 사용)
- [x] 당첨 번호 및 보너스 번호 비교
- [x] 당첨 결과 계산 (1~5등)
  - 1등: 6개 일치 / 2,000,000,000원
  - 2등: 5개 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 일치 / 1,500,000원
  - 4등: 4개 일치 / 50,000원
  - 5등: 3개 일치 / 5,000원
- [x] 총 수익률 계산

### Utils

#### Validator 클래스

- [x] 구매 금액 유효성 검사 (1,000원 단위, 정수 여부, 0 이상)
- [x] 당첨 번호 유효성 검사 (6개, 범위, 중복)
- [x] 보너스 번호 유효성 검사 (중복 여부 및 범위)

#### Formatter 클래스

- [x] 숫자 콤마 포맷 처리

### Controllers

#### LottoController 클래스

- [] 게임 로직 전체 제어
- [] 사용자 입력 처리 및 유효성 검사
- [] Model과 View를 연결하여 데이터 흐름 관리
- [] 예외 처리 및 재시도 로직 구현

---

## 🧪 테스트 구현

### Models Tests

- [] Lotto 클래스 단위 테스트 (번호 개수, 범위, 중복 검증)
- [] LottoResult 클래스 단위 테스트 (등수 계산 및 결과 확인)

### Services Tests

- [] LottoService 클래스 단위 테스트 (번호 비교, 등수 및 수익률 계산)

### Views Tests

- [x] InputView 테스트 (입력 검증)
- [x] OutputView 테스트 (출력 검증)

### 통합 테스트

- ApplicationTest (전체 시나리오 테스트)

---

## 🔧 사용 라이브러리

- @woowacourse/mission-utils (랜덤 및 콘솔 입력/출력 처리)


### 💻 실행 결과 예시

```
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
...

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
...
총 수익률은 62.5%입니다.
```