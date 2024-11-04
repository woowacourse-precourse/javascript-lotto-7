# javascript-lotto-precourse

# 기능구현 리스트
## 입력부
- [✅] 구매금액 입력
- [✅] 구매금액 예외처리(숫자인지,1000단위인지)
- [✅] 구매금액 예외처리후 회복(다시 입력할 수 있도록)
- [✅] 당첨번호 6개 입력
- [✅] 당첨번호 예외처리(숫자인지,1이상 45이하인지,중복되는 번호가 있는지)
- [✅] 당첨번호 예외처리 후 회복
- [✅] 보너스번호 입력
- [✅] 보너스번호 예외처리(숫자인지,1이상 45이하인지)
- [✅] 보너스번호 예외처리 후 회복
## 출력부
- [✅] 구매금액을 횟수 변경기능
- [✅] 2차원 행렬에 횟수만큼 발행로또 저장 및 출력 -> 오름차순 정렬
- [✅] 발행로또 당첨번호와 보너스 번호 검증
- [✅] 당첨 내역 출력및 수익금 저장
- [✅] 수익률 출력
- [✅] 2등 3등 구분 로직 수정

# 리팩토링 리스트
- [✅] Lotto 클래스 속성 제거
- [✅] 기존 단위테스트 통과를 위한 입력부 타입관련 수정
- [✅] 하드코딩된 문자열 상수화
- [✅] 유효성 검증 클래스 생성
- [✅] Lotto 클래스 메소드 분리
- [✅] 결과를 처리하고, 출력하는 LottoResult 클래스 생성
- [✅] 15줄 이상 함수 분리
- [] 테스트코드 입력을 위한 리팩토링

# 버그 수정 리스트
- [] 구매입력으로 " ",0을 입력한 경우 오류가 출력되지 않는 버그 픽스

# 추가 테스트케이스
## Bet 클래스
- [✅] 구매 금액 입력 && 생성자 유효성 검증용 테스트코드 작성
## Lotto 클래스
- [] 로또 번호 입력 && 생성자 유효성 테스트코드 작성
- [] 보너스 번호 입력 및 유효성 테스트코드 작성


# 생각해볼 것들
## validator
검사하는 함수를 종합하는 함수를
이 안에서 또 만들어도 될까??
-> 모듈화를 하는 것이 목표라면 대상 클래스에서 작성하자.
## 테스트코드
- 오류가 나지 않을 만한, 그러니까, 예를 들어 올바른 입력값이 들어갈 수 밖에 없는 함수의 경우 테스트 코드를 작성해야하나?에 대한 의문이 생긴다.
물론 없는것 보다야 있는게 낫겠지만, 우선은 개발자가 오류가 생길만한 곳을 추적하여, 그부분을 우선적으로 테스트 관리를 하는것이 맞겠다고 결론짓는다.
- 위에서 예로 들을 만한 코드는 LottoResult 생성자와 메소드가 있는데 오류가 날법한 경우는 동료개발자가 인스턴스를 생성할때, 잘못된 방식으로 입력하는 경우가 있겠다. 또한 메소드에 엉뚱한 파라미터를 입력할 여지도 있다. 
---
현재 테스트코드 작성 우선순위는 다음과 같다.
1. 유저가 직접적으로 입력을 하는 코드
2. 동료개발자가 재사용할만한 코드
-> 2를 생략 할 수 있는 제일좋은 방법은 역시 타입스크립트 같다. 파라미터를 특정 타입(모델)만 가능하게 하다면 잘못된 파라미터를 동료개발자가 작성할 여지가 매우매우 적어질 것이다.
