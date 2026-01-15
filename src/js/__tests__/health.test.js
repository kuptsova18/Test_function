import HealthHeroes from '../basic';

test('checkup health > 50', () => {
  const result = HealthHeroes({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});
test('checkup health < 50 и > 15', () => {
  const result = HealthHeroes({ name: 'Маг', health: 45 });
  expect(result).toBe('wounded');
});
test('checkup health < 15', () => {
  const result = HealthHeroes({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});
