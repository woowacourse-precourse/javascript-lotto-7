import {Console} from '@woowacourse/mission-utils'

export const InputHandler = {
    async getInput(instruction, validator = (x) => x, process = (x) => x) {
        const input = await Console.readLineAsync(instruction)
        return validator(process(input))
    },
}