import {Console} from '@woowacourse/mission-utils'

export const InputHandler = {
    async getInput(instruction, validationCheck = (x) => x, process = (x) => x) {
        const input = await Console.readLineAsync(instruction)
        return validationCheck(process(input))
    },
}