import { Console } from "@woowacourse/mission-utils"

export const getVaildInput = async (PROMPT, valid) => {
    let isValid = false
    let input = ''
    while (!isValid) {
        input = await Console.readLineAsync(PROMPT)
        isValid = valid(input)
    }
    return input
}

export const inputPay = async () => {
    const PROMPT = '구입금액을 입력해 주세요.\n'

    const valid = (INPUT) => {
        if (INPUT == '') {
            Console.print("[ERROR] 로또 구입 금액을 입력해 주세요.")
            return false
        }
        if (isNaN(INPUT)) {
            Console.print("[ERROR] 숫자를 입력해 주세요.")
            return false
        }
        if (INPUT % 1000 != 0) {
            Console.print("[ERROR] 천 원 단위로 입력해 주세요.")
            return false
        }
        return true
    }
    return await getVaildInput(PROMPT, valid)
}

export const inputWinningNumbers = async () => {
    const PROMPT = '당첨 번호를 입력해 주세요.\n'

    const valid = (INPUT) => {
        if (INPUT == '' || INPUT == undefined) {
            Console.print("[ERROR] 당첨 번호를 입력해 주세요.")
            return false
        }

        const INPUT_ARR = INPUT.split(',')


        if (INPUT_ARR.every(num => isNaN(num))) {
            Console.print("[ERROR] 숫자를 입력해 주세요.")
            return false
        }

        if (INPUT_ARR.length !== 6) {
            Console.print("[ERROR] 수를 6개 입력해 주세요")
            return false
        }

        if (INPUT_ARR.every(num => !Number.isInteger(num))) {
            Console.print("[ERROR] 정수를 입력해 주세요")
            return false
        }

        const numberSet = new Set(INPUT_ARR.map(Number))
        if (numberSet.size !== INPUT_ARR.length) {
            Console.print("[ERROR] 로또 번호에 중복된 숫자가 존재합니다.")
            return false
        }

        for (const num of numberSet) {
            if (num < 1 || num > 45) {
                Console.print("[ERROR] 로또 번호는 1과 45 사이의 숫자여야 합니다.")
                return false
            }
        }

        return true
    }

    return await getVaildInput(PROMPT, valid)
}


export const inputBonusNumber = async () => {
    const PROMPT = '보너스 번호를 입력해 주세요.\n'

    const valid = (INPUT) => {
        if (INPUT == '') {
            Console.print("[ERROR] 보너스 번호를 입력해 주세요.")
            return false
        }

        if (isNaN(INPUT)) {
            Console.print("[ERROR] 숫자를 입력해 주세요.")
            return false
        }

        if (!Number.isInteger(INPUT)) {
            Console.print("[ERROR] 정수를 입력해 주세요")
        }


        for (const num of numberSet) {
            if (num < 1 || num > 45) {
                Console.print("[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다.")
                return false
            }
        }

    }

    return await getVaildInput(PROMPT, valid)
}