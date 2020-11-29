
// const teachers = ['Ivan', 'Vlad', 'Bogdan'];


// const teacher1 = 'ivan';

// const teacher2 = 'vlad';


// const teachers = [[54, 10], [true, false], teacher1, teacher2, 'serhii', 'rostyk'];


// console.log('teachers: ', teachers[0][1]);


// const teachers = ['Ivan', 'Vlad', 'Bogdan'];

// teachers.shift();

// console.log('teachers: ', teachers);



// const a = +prompt('enter some number');
// const b = +prompt('enter some number');
// const c = +prompt('enter some number');

// console.log(a, b, c);

// if (a >= b && a >= c) {
//   console.log('A: ', a);
// } else if (b > c) {
//   console.log('b: ', b);
// } else {
//   console.log('c: ', c);
// }



// const teachers = ['Ivan', 'Vlad', 'Bogdan', 'serhii', 'rostyk'];


// console.log(teachers.slice(2));



// console.log(teachers.splice(2, 2, 'yevhenia', 'ostap'));


// const firedTeachers = teachers.push('yevhenia');


// console.log('firedTeachers: ', firedTeachers);

// console.log('teachers: ', teachers);



// const test = 'hello';

// console.log(test.split('').reverse().join(''));

function getNumbers(amountOfNumbers = 3) {
  const numbers = [];
  for (let i = 0; i < amountOfNumbers; i++) {
    const n = +prompt('enter some number');
    numbers.push(n);
  }

  return numbers
}

function getNumbersString() {
  const result = prompt('enter some numbers divided by comma: ');

  return result.split(',')
}

function findBiggest(numbers) {
  let biggestOne = +numbers[0]
  for (let i = 0; i < numbers.length; i++) {

    if (+numbers[i] > biggestOne) {
      biggestOne = +numbers[i]
    }
  }
  return biggestOne;
}


// const result = getNumbersString();

// console.log('result: ', findBiggest(result))


// let a = 10;
// let b = a;

// a = 555;

// console.log('a: ', a);
// console.log('b: ', b);


// let a = [55];

// let b = a;

// a.push(77);
// b.push(111);

// console.log( a === b);

// console.log('a: ', a);
// console.log('b: ', b);



// const teachers = ['ivan', 'serhii', 'rostyk'];


function printTeachers(names) {
  const result = [...names];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    result[i] = name[0].toUpperCase() + name.substr(1);
    // result.push(name[0].toUpperCase() + name.substr(1));
  }

  console.log(result.join(', '));
}


// printTeachers(teachers);

// console.log('teachers: ', teachers);


const teachers = ['ivan', 'bohdan', 'serhii', 'rostyk', 'ivan'];
function removeIvan(names) {
  const result = [...names]
  let indexOfIvan;

  do {
    indexOfIvan = result.indexOf('ivan');

    if (indexOfIvan !== -1) {
      result.splice(indexOfIvan, 1)
    }
  } while(indexOfIvan !== -1)

  return result;
}

// console.log(removeIvan(teachers));
const others = ['vlad', 'ostap']

const test = [...others, ...teachers]


// console.log('test: ', test);

// const someArray = [1212312];

// someArray.push('sdfsdf')

// console.log('someArray: ', someArray);

// someArray = [];

let a = [];

let b = a;

console.log(a === b);

console.log([] == []);


// [].filter
// [].map
// [].reduce
