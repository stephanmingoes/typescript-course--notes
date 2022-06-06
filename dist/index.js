"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
let age = 20;
if (age > 15)
    age += 10;
let sales = 123456789;
let course1 = "Java";
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [];
let user = [1, "Stephan"];
user.push(3);
console.log(user);
let mySize = 1;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return 1.5 * income;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: "Stephan",
    retire: (date) => {
        console.log(date);
    },
};
let employee1 = {
    id: 1,
    name: "Stephan",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log(name.toLowerCase);
    else
        console.log("No value given");
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let speed = 30;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
console.log(ride);
function render1(document) {
    if (document)
        console.log("Do sme");
}
function reject(message) {
    throw new Error(message);
}
function processEvent() {
    while (true) {
    }
}
class Account {
    constructor(id, owner, balance) {
        this._id = id;
        this.owner = owner;
        this._balance = balance;
    }
    get balance() {
        return this._balance - this.calculateTax();
    }
    get id() {
        return this._id;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid Ammount");
        this._balance += amount;
    }
    calculateTax() {
        return 1.2 * this._balance;
    }
}
let account = new Account(1, "Stephan", 0);
account.deposit(100);
console.log(account);
console.log(account.balance);
console.log(typeof account);
console.log(account instanceof Account);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats["A1"] = "Mosh";
seats["A2"] = "Josh";
console.log(seats);
class Ride {
    static get activeRides() {
        return Ride._activeRides;
    }
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
}
Ride._activeRides = 0;
const ride1 = new Ride();
const ride2 = new Ride();
ride1.start();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    takeTest() {
        console.log("taking a test");
    }
}
let student = new Student(1, "John", "Smith");
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
printNames([
    new Student(1, "John", "Smith"),
    new Teacher("Mosh", "Hamedani"),
    new Principal("God", "Smith"),
]);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const pair = new KeyValuePair(1, "John");
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
console.log(ArrayUtils.wrapInArray("1"));
function fetch(_url) {
    return { data: null, error: null };
}
function echo(value) {
    return value;
}
console.log(echo("name"));
class Store {
    constructor() {
        this._objects = [];
    }
    add(object) {
        this._objects.push(object);
    }
    find(property, value) {
        return this._objects.find((o) => o[property] === value);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
const store = new CompressibleStore();
store.compress();
let store1 = new Store();
store1.add({ name: "John", price: 100 });
store1.find("name", "John");
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((o) => o.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return this._objects.filter((o) => o.name === category);
    }
}
function Component(selector) {
    return (constructor) => {
        console.log("Component Decorator Called");
        constructor.prototype.options = selector;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertDOM = () => {
            console.log("Inserting element in the dom");
        };
    };
}
function Pipe(constructor) {
    console.log("Pipe Decorator Called");
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: "#my-component" }),
    Pipe
], ProfileComponent);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class Person1 {
    static say(message) {
        console.log("Person say " + message);
    }
}
__decorate([
    Log
], Person1, "say", null);
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original.call(this);
        if (typeof result === "string") {
            return result.toUpperCase;
        }
        return result;
    };
}
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Person2.prototype, "fullName", null);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} long.`);
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(password) {
        this.password = password;
        this._password = password;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "_password", void 0);
let user1 = new User("1234");
const watchedParameters = [];
function Watch(target, methodName, parameterIndex) {
    watchedParameters.push({ methodName, parameterIndex });
}
class Vehicle {
    static move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle, "move", null);
console.log(watchedParameters);
//# sourceMappingURL=index.js.map