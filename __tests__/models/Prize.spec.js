import Prize from '../../src/models/Prize';
import { PRIZES } from '../../src/constants/prizes';

describe('models/Prize', () => {
  describe('calculateTotalPrize()', () => {
    it('should calculate the total prize correctly for a given result', () => {
      const result = {
        match3: 2,
        match4: 1,
        match5: 1,
        match5PlusBonus: 0,
        match6: 1,
      };

      const expectedTotalPrize =
        result.match3 * PRIZES.match3 +
        result.match4 * PRIZES.match4 +
        result.match5 * PRIZES.match5 +
        result.match5PlusBonus * PRIZES.match5PlusBonus +
        result.match6 * PRIZES.match6;

      const totalPrize = Prize.calculateTotalPrize(result);
      expect(totalPrize).toBe(expectedTotalPrize);
    });

    it('should return 0 if there are no winning matches', () => {
      const result = {
        match3: 0,
        match4: 0,
        match5: 0,
        match5PlusBonus: 0,
        match6: 0,
      };

      const totalPrize = Prize.calculateTotalPrize(result);
      expect(totalPrize).toBe(0);
    });
  });
});
