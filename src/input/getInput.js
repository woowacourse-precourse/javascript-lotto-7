import { Console } from '@woowacourse/mission-utils'

export default function getInput(question) {
    return Console.readLineAsync(question);
}
