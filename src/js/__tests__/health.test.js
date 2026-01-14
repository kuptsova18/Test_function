import {HealthHeroes} from '../basic';

test('checkup health', () => {
  const result = HealthHeroes({name: 'Маг', health: 90});

  expect(result).toBe("healthy");
});
