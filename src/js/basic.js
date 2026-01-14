export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

export function HealthHeroes(heroe){
  if(heroe.health > 50) {
    return "healthy";
  } else if (heroe.health <= 50 && heroe.health >=15) {
    return "wounded";
  }else {
    return "critical";
  }
}