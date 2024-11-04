# javascript-lotto-precourse
## 기능 요구 사항
1. **구매 금액 입력**
    1. 구매 금액 입력
    2. Slot 객체 생성
    3. 구매 금액 유효성 검사
    4. 구매 만큼 로또 생성 & 출력
2. **당첨번호, 보너스 번호 입력**
    1. 당첨번호 유효성 검사
3. **당첨 여부 확인 기능**
    1. 하나씩 당첨 여부 확인
    2. 레포트 기록
4. **레포트 출력**
    1. 결과 출력

## 객체 구성
- **Screen 객체**
    - 입출력 객체
    - inputMoney()
    - inputLotto()
    - inputBonus()
    - printLotteries()
    - printResult()
- **Lotto 객체**
    - 당첨 번호 저장
    - 변수
        - numbers : Array<Number>
            - 당첨 번호
    - 메소드
        - validateLength(numbers) → undefined
            - 당첨 번호 배열 유효성 검사
        - validateInteger(numbers) → undefined
            - 정수값 유효성 검사
        - validateRange(numbers)→ undefined
            - 1~45값 유효성 검사
        - 
- **돈 투입 객체 Slot**
    - 변수
        - money  : Number
            - 투입한 돈
        - lotteryArray : Array<Array<Number>>
            - 구매한 로또 배열
        - bonusNumber : Number
    - 메소드
        - getPurchaseNum() : 구매할 로또 매수 계산
        - purchaseLottery() : 구매한 만큼 Lottery 객체 생성
        - validateInputMoney(Number) : 투입한 돈 유효성 검사
        - validateInteger(Number) : 숫자 체크
        - validateThousand(Number) : 1000원 단위 체크

- **각 뽑은 복권 객체 Lottery**
    - 변수
        - numbers : Array<Number>
    - 메소드
        - matchWinNumbers(Array) → Array<Number>
            - 당첨 번호와 뽑은 숫자 중복된 배열 리턴
        - calculateResult(Array) → Number
            - 등수 계산
        - matchBonus(Number, Array) → Boolean
            - 보너스 계산 메소드
- **결과 정리 객체 → Report**
    - 변수
        - prize : Number
            - 총 상금
        - 총 결과 : Object
            - 3개 일치
            - 4개 일치
            - 5개 일치
            - 5개 일치+보너스 일치
            - 6개 일치
    - 메소드
        - getResult() → undefined
            - 결과 값 출력
        - getPrize(Number) → Number :
            - 수익률 계산(prize, input)
- **기타 객체**
    - **에러 메세지 저장 객체**