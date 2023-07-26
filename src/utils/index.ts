export const getTotalSum = (arr: number[]): number => {
  return arr.reduce((totalSum, currentValue) => totalSum + currentValue, 0);
};

export function decreaseInitialItemValue(arr: number[][]) {
  const newCounter: number[][] = [...arr];
  newCounter.forEach((item) => {
    if (item.length === 0) {
      return;
    }
    if (item[0] === 1 || item[0] < 1) {
      return item.shift();
    }
    return (item[0] = item[0] - 1);
  });
  return newCounter;
}
