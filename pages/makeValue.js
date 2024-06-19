export function makeValue() {
  const list = 'abcdefghijklmnopqrstuvwxyz';
  const item = list[Math.floor(Math.random() * list.length)] + list[Math.floor(Math.random() * list.length)] + list[Math.floor(Math.random() * list.length)] + list[Math.floor(Math.random() * list.length)];
  return item;
}
