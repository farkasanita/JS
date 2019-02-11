const readlineSync = require('readline-sync');
console.log('Üdvözöllek a rendelőben!');

let bodyPart = ['Fej', 'Jobb kéz', 'Bal kéz', 'Törzs', 'Bal láb', 'Jobb láb'],
index = readlineSync.keyInSelect(bodyPart);



let algorithmPicker = i => {
    switch (i) {
        case 0:
        let headRandom = () => {
            let headNum;
            headNum = Math.floor(Math.random() * (1000000 - 1)) + 1;
            if (headNum % 3 === 0 && headNum % 4 !== 0) {
              return headNum;
            } else {
              return headRandom();
            }
          };
          console.log(headRandom())
          case 1:
          let rightHandRandom = () => {
            let rightHandNum;
            rightHandNum = Math.floor(Math.random() * (1000000 - 1)) + 1;
            if (rightHandNum % 5 === 0 && rightHandNum % 7 !== 0) {
              return rightHandNum;
            } else {
              return rightHandRandom();
            }
          };
          case 2:
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
    }
}

let result = algorithmPicker();
console.log(result);