function repeatStr(n, s) {
  return s.repeat(n);
}

function minMinMax(array) {
  const sortedArray = array.sort((a, b) => a - b);
  let minimumAbsent;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i + 1] > sortedArray[i] + 1) {
      minimumAbsent = sortedArray[i] + 1;
      break;
    }
  }
  return [Math.min(...array), minimumAbsent, Math.max(...array)]
}