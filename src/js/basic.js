export default function HealthHeroes(heroe) {
  if (heroe.health > 50) {
    return 'healthy';
  }
  if (heroe.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
