'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   Never Do This

//     this.calcAge = function () {
//       console.log('2037' - this.birthYear);
//     };
// };

// const jonas = new Person('jonas', 1975);
// console.log(jonas);
// // 1. Mew{} is Created
// // 2. funcion is called, this = {}
// // 3. {} linked to a prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2912);
// const hack = new Person('jack', 2402);
// console.log(matilda, hack);

// console.log(jonas instanceof Person);

// Person.hey = function(){
//    c
// }
// Person.hey()

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log('2037' - this.birthYear);
// };

// jonas.calcAge()

// console.log(jonas.__proto__)
// console.log(jonas.__proto__ === Person.prototype)

// console.log(Person.prototype.isPrototypeOf(jonas))
// console.log(Person.prototype.isPrototypeOf(matilda))
// console.log(Person.prototype.isPrototypeOf(hack))

// //  .PrototypeOfLinkedObjects

// Person.prototype.spicies = 'Homo Sapiens'
// console.log(jonas.spicies, matilda.spicies)

// console.log(jonas.hasOwnProperty('firstName'))
// console.log(jonas.hasOwnProperty('species'))

// console.log(jonas.__proto__)
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__)
// console.log(jonas.__proto__.__proto__.__proto__)

// const arr  = [3, 6, 4, 5, 6, 9, 3] // new Array = = = []

// console.log(arr.__proto__)
// console.log(arr.__proto__ === Array.prototype)

// console.log(arr.__proto__.__proto__)

// Array.prototype.unique = function(){
//     return [...new Set(this)]
// }

// console.log(arr.unique())

// const h1 = document.querySelector('h1')
// console.dir(x => x + 1)

// const Car = function(make, speed){
//     this.make = make
//     this.speed = speed
// }

// Car.prototype.accelerate = function(){
//     this.speed += 10
//     console.log(`${this.make} is going at ${this.speed} km/h`)

// }
// Car.prototype.brake = function(){
//     this.speed -= 5
//     console.log(`${this.make} is going at ${this.speed} km/h`)

// }
// const bmw = new Car('BMW', 120)
// const mercedes = new Car('Mercedes', 95)

// bmw.accelerate()
// bmw.accelerate()
// bmw.brake()
// bmw.accelerate()

// Class experession
// const PersonCl = class{}

// Class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName(){
//     return this._fullName;
//   }

// //   Static method

// static hey(){
//     console.log(`Hey ${this.firstName}`)
//     console.log(PersonCl)
// }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// 1. Classes are NOt hoisted
// 2. Class are first-class citizens
// 3. Classes are excuted in strict mode

// const walter = new PersonCl('Walter White', 1965)

// const account = {
//     owner: 'Saeed',
//     movements: [200, 5454, 43, 13]

//     get latest(){
//         return this.movements.slice(-1).pop()
//     }
//     ,

//     set latest(mov){
//         this.movements.push(mov)
//     },

// }

// console.log(account.latest)

// account.latest(50)
// console.log(account.movements)

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//       },

//       init(firstName, birthYear) {
//         this.firstName = firstName
//         this.birthYear = birthYear
//       }

// }

// const steven = Object.create(PersonProto)
// console.log(steven)
// steven.name = 'Steven'
// steven.birthYear = 2002
// steven.calcAge()

// console.log(steven.__proto__ === PersonProto)

// const sarah = Object.create(PersonProto)
// sarah.init('Sarah', 1979)
// sarah.calcAge()

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
//   };

//   Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };

//   Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };

//   const bmw = new Car('BMW', 120);
//   const mercedes = new Car('Mercedes', 95);

//   bmw.accelerate();
//   bmw.accelerate();
//   bmw.brake();
//   bmw.accelerate();

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   Person.prototype.calcAge = function () {
//     console.log('2037' - this.birthYear);
//   };
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking Prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and i Study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function(make, speed, charge){
//   Car.call(this, make, speed)
//   this.charge = charge

// }

// // Link the prototypes
// EV.prototype = Object.create(Car.prototype)

// EV.prototype.chargeBattery = function(chargeTo){
//   this.charge = chargeTo
// }

// EV.prototype.accelerate = function(){
//   this.speed += 20
//   this.charge--
//   console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}!`)
// }

// const tesla = new EV('Tesla', 120, 23)
// tesla.chargeBattery(90)
// console.log(tesla)
// tesla.brake()
// tesla.accelerate()

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //   Static method

//   static hey() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} amd i study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a  student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha jones', 2012, 'Computer Science');
// martha.introduce()
// martha.calcAge()

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.fullName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version )

// class Account{
//   // 1) Public fields (Instances)
//   locale = navigator.language;

//   // 2) Private fields (Instances)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin){
//     this.owner = owner
//     this.currency = currency
//     // Protected Property
//     this.#pin = pin
//     // this._movements = []
//     // this.locale = navigator.language

//     console.log(`Thanks for opening an account, ${owner}`)
//   }

//   //  3) Public methods

//   // Public interface
//   getMovements(){
//     return this.#movements
//   }

//   deposit(val){
//     this.#movements.push(val)
//     return this;
//   }

//   withdraw(val){
//     this.deposit(-val)
//     return this;
//   }

//   _approveLoan(val){
//     return true
//   }

//   requestLoan(val){
//     if(this._approveLoan(val)){
//       this.deposit(val)
//       console.log(`Loan approved`)
//       return this
//     }
//   }

//   // Static version
//   static helper(){
//     console.log('static')
//   }

//   // 4) Private methods
//   // #approveLoan(val){}
//   #approveLoan(val){
//     return true
//   }

// }

// const acc1 = new Account('Saeed', 'EUR', 1111)
// acc1.deposit(250)
// acc1.withdraw(140)
// acc1.requestLoan(1000)
// acc1._approveLoan(1000)
// console.log(acc1.getMovements())
// console.log(acc1)
// console.log(acc1.pin)
// Account.helper()

// // console.log(acc1.#movements)
// // console.log(acc1.#pin)
// // console.log(acc1.#approveLoan(100))

// // Chaining
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
// console.log(acc1.getMovements())

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
