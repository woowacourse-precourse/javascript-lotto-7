# javascript-lotto-precourse

## 기능 목록 정리

간단한 로또 발매기를 구현한다.

-   입력

    -   로또 구입 금액을 입력 받는다.
        -   구입 금액은 1,000원 단위로 입력 받으며, 그렇지 않을 경우 예외 처리
        -   로또 번호는 1~45까지이다.
        ```bash
        구입금액을 입력해 주세요.
        8000
        ```
    -   당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.

        ```bash
        당첨 번호를 입력해 주세요.
        1,2,3,4,5,6
        ```

    -   보너스 번호를 입력 받는다.

        ```bash
        보너스 번호를 입력해 주세요.
        7
        ```

-   출력

    -   발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다

        ```bash
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

    -   당첨 내역을 출력한다.

        -   수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

        ```bash
        3개 일치 (5,000원) - 1개
        4개 일치 (50,000원) - 0개
        5개 일치 (1,500,000원) - 0개
        5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
        6개 일치 (2,000,000,000원) - 0개
        총 수익률은 62.5%입니다.
        ```

-   예외 처리

    -   예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

        ```bash
        [ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
        ```

        -   사용자가 입력한 구입 금액의 예외 사항

            -   올바른 숫자가 아닌 경우
            -   1,000 단위가 아닌 경우
            -   (추가 사항) 구입 금액이 10억원 이상일 시 예외처리

        -   사용자가 입력한 당첨 번호의 예외 사항

            -   6개의 숫자를 입력하지 않는 경우
            -   숫자가 아닌 수를 입력한 경우
            -   1부터 45 사이의 수가 아닌 경우
            -   중복 된 수가 있는 경우

        -   사용자가 입력한 보너스 번호의 예외 사항

            -   숫자가 아닌 수를 입력한 경우
            -   1부터 45 사이의 수가 아닌 경우
            -   중복 된 수가 있는 경우
