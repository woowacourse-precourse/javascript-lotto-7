# javascript-lotto-precourse

### 💡 구현 할 기능
#### 로또 구매 관련 기능
- 구입 금액 입력 받기
- 1000원 단위로만 입력 가능하도록 검증
- 잘못된 금액 입력 시 에러 처리
- 구입 금액에 해당하는 로또 발행
- 1장당 중복되지 않는 6개의 숫자(1~45) 생성
- 생성된 번호는 오름차순 정렬하여 저장

#### 당첨 번호 관련 기능
- 당첨 번호 6개 입력 받기
- 쉼표(,)로 구분된 숫자 파싱
- 번호 범위(1~45) 및 중복 검증
- 보너스 번호 1개 입력 받기
- 번호 번위 검증
- 기존 당첨 번호와 중복 검증

#### 당첨 확인 및 통계 기능
- 구매한 로또와 당첨 번호 비교
- 일치하는 번호 개수 계산
- 보너스 번호 일치 여부 확인
- 당첨 통계 생성
- 각 등수별 당첨 개수 집계
- 수익률 계산 (소수점 둘때 자리에서 반올림)

#### 출력 기능
- 구매한 로또 수량과 번호 목록 출력
- 당첨 통계 출력
- 3~6개 일치 및 보너스 번호 당첨 내역
- 총 수익률 출력

<br>

### 🗂 폴더 구조
```
src/
├── App.js                 # 애플리케이션 진입점
├── domain/
│   ├── Lotto.js           # 로또 번호 관리 클래스
│   ├── LottoGame.js       # 전체 게임 진행 관리
│   ├── LottoGenerator.js  # 로또 번호 생성 담당
│   └── WinningChecker.js  # 당첨 확인 및 통계 처리
├── utils/
│   └── Validator.js       # 입력값 검증
└── views/
    ├── InputView.js       # 사용자 입력 처리
    └── OutputView.js      # 결과 출력 처리
```

<br>

### ⚠️ 예외 처리 목록
- **입력값 검증**
  - 빈 값이나 공백만 입력한 경우
  - 숫자가 아닌 값을 입력한 경우
  - 로또 구매 금액이 1,000원 단위가 아닌 경우
  - 로또 구매 금액이 1,000원 미만인 경우


- **로또 번호 검증**
  - 당첨 번호가 6개가 아닌 경우
  - 당첨 번호가 1-45 범위를 벗어나는 경우
  - 당첨 번호에 중복된 숫자가 있는 경우
  - 보너스 번호가 1-45 범위를 벗어나는 경우
  - 보너스 번호가 당첨 번호와 중복되는 경우