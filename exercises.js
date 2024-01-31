let arrays = [[1, 2, 3], [4, 5], [6]];

export function flattening(list) {
  var result = list.reduce((previousValue, currentValue) =>
    previousValue.concat(currentValue)
  );
  return result;
}
console.log(flattening(arrays));

export function loop(value, test, update, body) {
  for (
    let currentValue = value;
    test(currentValue);
    currentValue = update(currentValue)
  ) {
    body(currentValue);
  }
}
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

export function everyLoop(array, test) {
  let currentResult = true;
  for (let item of array) {
    currentResult = currentResult && test(item);
  }
  return currentResult;
}
export function everySome(array, test) {
  return !array.some((value) => !test(value));
}

console.log(everyLoop([1, 3, 5], (n) => n < 10));
// → true
console.log(everyLoop([2, 4, 16], (n) => n < 10));
// → false
console.log(everyLoop([], (n) => n < 10));
// → true
console.log("break between loop and some responses");
console.log(everySome([1, 3, 5], (n) => n < 10));
// → true
console.log(everySome([2, 4, 16], (n) => n < 10));
// → false
console.log(everySome([], (n) => n < 10));
// → true
