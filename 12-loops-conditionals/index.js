
// const answer = prompt('who is the best teacher?');

// console.log('congrats');

// const bestSupport = prompt('Your are doing well. Who is the support?')

// if (bestSupport.toLowerCase() === 'yaryna') console.log('YEs');


// if (answer.toLowerCase() === 'ivan') {
//   console.log('Correct');
// } else if (answer.toLowerCase() === 'vlad') {
//   console.log('correct answer');
// } else if (answer.toLowerCase() === 'serhii') {
//   console.log('correct answer');
// } else {
//   console.log('wrong');
// }




// const item = prompt(`What'd you like to get?`);

// if (item === 'bread') {

//   let amount = parseInt(prompt(`how many?`));

//   console.log('amount: ', amount);

//   if (amount < 1) {
//     console.log('cant buy less than');
//   } else {
//     console.log('please: ', amount * 10);
//   }
// }


// const answer = prompt('who is the best teacher?');

// console.log(
//   answer === 'ivan' ? 'correct' : (answer === 'vlad' ? 'correct' : 'wrong')
// );

// const isAnswerCorrect = answer === 'ivan' ? 'correct' : 'wrong';

// console.log('isAnswerCorrect: ', isAnswerCorrect);




// const answer = prompt('who is the best teacher?');

// switch (answer) {
//   case 'ivan':
//   case 'vlad':
//   case 'yevhenia':
//     console.log('yes correct');
//     break;
//   default:
//     console.log('unfortunately');
//     break;
// }

// const answer = prompt('who is the best teacher?');

// if (answer === 'ivan' || answer === 'vlad' || answer === 'yevhenia') {
//   console.log('correct');
// }

// const n = +prompt('enter a number');

// if (10 < n && n < 20) {
//   console.log('yes');
// }

// const answer = prompt('who is the best teacher?');
// const secretWord = prompt('secret word?');

// 10 + 5 * 2 = 20
// (10 + 5) * 2 = 30
// if ((answer === 'ivan' || answer === 'vlad') && secretWord === 'cursor') {
//   console.log('hurray');
// }

// if (answer !== 'ivan') {
//   if (answer !== 'vlad') {
//     console.log('sorry wrong');
//   }
// }

// let answer;
// let attempts = 0;
// do {
//   answer = prompt('what school is the best');
//   ++attempts
// } while (answer !== 'cursor' && attempts < 3)

// if (attempts < 3) {
//   console.log('Yes you are right');
// }


// let i = 0;
// let result = i++;
// console.log('result: ', result);
// console.log('i: ', i);



// let answer;
// let attempts = 0;
// do {
//   answer = prompt('what school is the best');
//   ++attempts
// } while (answer !== 'cursor' && attempts < 3)


// for (let attempts = 0, answer = ''; attempts < 4; attempts++) {
//   if (attempts === 3) {
//     for (let i = 0; i < 3; i++) {
//       answer = prompt('who is the best teacher');
//       if (answer == 'ivan') {
//         console.log('Huuray');
//         break
//       }
//     }
//     break;
//   }

//   answer = prompt('what school is the best');

//   if (answer !== 'cursor') {
//     console.log('ohh :(');
//     continue;
//   }


//   console.log('yes');
//   break;
// }


const input = prompt('enter some text').toLocaleLowerCase();
const letter = prompt('some letter').toLocaleLowerCase();

let counter = 0;
let result = '';

// input "abc abc"
for (let i = 0; i < input.length; i++) {
  const char = input.charAt(i);

  const prevChar = i === 0 ? '' : input[i - 1];

  if (char === letter && prevChar !== ' ') {
    counter++;
  } else {
    result += char;
  }
}

console.log('result: ', result);
console.log('counter: ', counter);

