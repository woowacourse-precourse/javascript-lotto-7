# ✅ Lotto Program

- 📌 프로젝트 목표
  - 관련 함수들을 묶어 클래스로 구현하고, 객체들이 협력하여 하나의 큰 기능을 수행하도록 합니다.
  - 클래스와 함수에 대한 단위 테스트를 통해 의도한 대로 정확하게 작동하는지 확인합니다.
  - 코드의 가독성과 유지보수성을 높이기 위해 각 기능을 모듈화하고 객체 지향적으로 구현합니다.
- 🚀 기능 목록
  - 입력 기능
    - 로또 구입 금액 입력 (1,000원 단위로)
    - 당첨 번호와 보너스 번호 입력
    - 유효하지 않은 값 입력 시 에러 메시지 출력 및 재입력
  - 로또 발행 기능
    - 사용자가 입력한 구입 금액에 맞는 개수의 로또를 발행
    - 각 로또는 1~45 범위의 중복되지 않는 6개의 숫자로 구성
  - 당첨 확인 기능
    - 발행된 로또 번호와 당첨 번호를 비교하여 당첨 등수를 계산
    - 각 당첨 결과에 따라 등수와 상금을 구분
    - 총 수익률을 계산하여 출력
  - 출력 기능
    - 발행된 로또 수량 및 번호 목록을 출력 (오름차순 정렬)
    - 당첨 내역을 출력
    - 총 수익률을 소수점 둘째 자리까지 반올림하여 출력
- ⚠️ 에러 처리
  - 사용자가 잘못된 입력을 할 경우, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 재입력을 받습니다.
