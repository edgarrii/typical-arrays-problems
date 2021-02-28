
exports.min = function min (arr) {
  if (arr.length == 0 || arr == null) return 0;
  let tempMin = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (tempMin > arr[i]) tempMin = arr[i];
  }
  return tempMin;
}

exports.max = function max (arr) {
   if (arr.length == 0 || arr == null) return 0;
  let tempMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > tempMax) tempMax = arr[i];
  }
  return tempMax;
}

exports.avg = function avg (arr) {
    if (arr.length == 0 || arr == null) return 0;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum / arr.length;
  }
  return avg;
}
