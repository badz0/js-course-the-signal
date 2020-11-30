
// function actuallyHere() {
//   debugger
//   return 'some msg'
// }

// function msgIsHere () {
//   return actuallyHere();
// }

// function getMsg() {
//   return msgIsHere();
// }

// console.log(getMsg());


// foo();

let allowedMethods = (function() {
  let hello = 'HEY'
  // console.log(hello)

  function createCounter(counter = 0) {
    return () => {
      counter++;
      console.log('counter: ', counter);
      console.log('test');
    }
  }
  
  
  // let countTest = createCounter();
  // countTest();
  // countTest();
  // countTest();
  
  // let countTest2 = createCounter(111);
  
  // countTest2();
  // countTest2();
  // countTest2();

  return {
    getHello: function() {
      return hello;
    },
    getSomeData: function() {

    }
  }
})()

// console.log(allowedMethods.getHello());

const idGenerator = (function() {
  let id = 0;
  return () => {
    return id++;
  }
})()

// console.log('idGenerator: ', idGenerator);

// console.log('idGenerator: ', idGenerator);

// console.log(idGenerator());
// console.log(idGenerator());
// console.log(idGenerator());
// console.log(idGenerator());
// console.log(idGenerator());




// const test = () => {
//   console.log(this);
// }


// test();

// const obj = {
//   test
// }

// obj.test();



let group = {
  students: ['Ivan', 'Vlad', 'Bohdan'],
  groupName: 'the Signal',
  printStudents: function() {
    const print = function(student) {
      console.log(student + ': ', this.groupName);
    }


    this.students.forEach(print.bind(this))
  }
}

// group.printStudents();

function printName(msg, endMsg) {
  console.log(msg, this.firstName, this.lastName, endMsg);
}

const ivan = {
  firstName: 'Ivan',
  lastName: 'Lohonov',
}
const oleh = {
  firstName: 'Oleh',
  lastName: 'Volos',
}

const msgs = ['hello', 'buy']
// printName.call(ivan, ...msgs);

// printName.apply(oleh, msgs);

let printIvan = printName.bind(ivan, 'hey');

// printIvan();
// printIvan();

// oleh.printName();


function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2)

// console.log(double(11));


console.log(Math.max.apply(null, [1, 34, 13, 5]));
