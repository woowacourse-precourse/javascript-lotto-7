
class Validator {
    static validateLotto(numbers) {
        try {
            if (numbers.length !== 6) {
                throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
            }
        } catch (error) {
            throw error;
        }
    }
}

export default Validator;