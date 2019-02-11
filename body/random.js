let headRandom = () => {
  let headNum;
  headNum = Math.floor(Math.random() * (1000000 - 1)) + 1;
  if (headNum % 3 === 0 && headNum % 4 !== 0) {
    return headNum;
  } else {
    return headRandom();
  }
};

console.log(headRandom());

let rightHandRandom = () => {
  let rightHandNum;
  rightHandNum = Math.floor(Math.random() * (1000000 - 1)) + 1;
  if (rightHandNum % 5 === 0 && rightHandNum % 7 !== 0) {
    return rightHandNum;
  } else {
    return rightHandRandom();
  }
};

console.log(rightHandRandom());

let leftHandRandom = () => {
  let leftHandNum;
  leftHandNum = Math.floor(Math.random() * (1000000 - 1)) + 1;
  if (leftHandNum === 1) {
    return leftHandRandom();
  }
  for (let i = 2; i < leftHandNum; i++) {
    if (leftHandNum % i === 0) {
      return leftHandRandom();
    }
  }
  return leftHandNum;
}
;
console.log(leftHandRandom());

