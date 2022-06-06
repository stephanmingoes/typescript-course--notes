// => Getting started with typescript
let age: number = 20;
if (age > 15) age += 10;
// console.log(age);

// => Fundamentals
// Built in Types
let sales: number = 123456789;
let course1: string = "Java";
let course = "TypeScript"; // automatically seen as string
let is_published: boolean = true;

// Any type
let level: any; // can be any type of variable

function render(document: any) {
  console.log(document);
}

// arrays

let numbers: number[] = [];

// tuples
let user: [number, string] = [1, "Stephan"]; // exactly 2 elements, numbers and strings
user.push(3);
console.log(user);

// enums - should follow pascal naming convention

const enum Size {
  Small,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// Functions

function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return 1.5 * income;
}

calculateTax(10_000);

// Objects

let employee: {
  readonly id: number;
  name: string;
  age?: number;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Stephan",
  retire: (date: Date) => {
    console.log(date);
  },
};

// => Advanced Types

// type aliases - we can define a custom type

type Employee = {
  readonly id: number;
  name: String;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "Stephan",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union types

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;

  return parseInt(weight) * 2.2;
}

// Intersection types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type Uiwidget = Draggable & Resizable;

let textBox: Uiwidget = {
  drag: () => {},
  resize: () => {},
};

// Literal types
type Quantity = 50 | 100;
let quantity: Quantity = 50; // Annotate with literal or specific value

// Nullable
function greet(name: string | null | undefined): void {
  if (name) console.log(name.toLowerCase);
  else console.log("No value given");
}

// Optinal chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

console.log(customer?.birthday?.getFullYear());

// Nullish Coaelscing operator
let speed: number | null = 30;

let ride = {
  speed: speed ?? 30,
};

console.log(ride);

// type assertions

// let phone = document.getElementById("book") as HTMLInputElement;

// The unknown type

function render1(document: unknown) {
  // using narrowing
  if (document) console.log("Do sme");
}

// The never type

function reject(message: string): never {
  throw new Error(message);
}
function processEvent(): never {
  while (true) {
    // read a message from queue
  }
}

// => Object Oriented Programming

// creating classes
class Account {
  private _id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this._id = id;
    this.owner = owner;
    this._balance = balance;
  }

  get balance(): number {
    return this._balance - this.calculateTax();
  }

  //   set balance(value: number) {
  //     if (value <= 0) throw new Error("Invalid Value");

  //     this._balance = value;
  //   }

  get id(): number {
    return this._id;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid Ammount");

    this._balance += amount;
  }

  private calculateTax(): number {
    return 1.2 * this._balance;
  }
}

// creating objects
let account: Account = new Account(1, "Stephan", 0);
account.deposit(100);
console.log(account);
console.log(account.balance);
console.log(typeof account);
console.log(account instanceof Account);

// Index signatures

class SeatAssignment {
  // A1, A2
  // Mosh, John
  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();

seats["A1"] = "Mosh";
seats["A2"] = "Josh";

console.log(seats);

// Static members

class Ride {
  //passenger
  // pickup
  // location

  private static _activeRides: number = 0;

  static get activeRides(): number {
    return Ride._activeRides;
  }

  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }
}

const ride1 = new Ride();
const ride2 = new Ride();
ride1.start();
ride2.start();
console.log(Ride.activeRides);

// Inheritance

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  protected walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentID: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("taking a test");
  }
}

let student = new Student(1, "John", "Smith");

class Teacher extends Person {
  override get fullName(): string {
    return "Professor " + super.fullName;
  }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);

// Polymorphism

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
class Principal extends Person {
  override get fullName(): string {
    return "Principal " + super.fullName;
  }
}

printNames([
  new Student(1, "John", "Smith"),
  new Teacher("Mosh", "Hamedani"),
  new Principal("God", "Smith"),
]);

// Abstract classes

abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log("Rendering a circle");
  }
}

// Interfaces

// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}
interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}

// => Generics

// Understanding the problem

// Generic classes
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

const pair = new KeyValuePair<number, string>(1, "John");

// Generic functions

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
console.log(ArrayUtils.wrapInArray<string>("1"));

// Generic Interfaces

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(_url: string): Result<T> {
  return { data: null, error: null };
}

// interface Product {
//   title: string;
// }

// let result = fetch<Product>("url");
// result.data?.title;

// Generic constraints

function echo<T extends string | { name: string }>(value: T): T {
  return value;
}

console.log(echo("name"));

// Extending generic classes

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(object: T): void {
    this._objects.push(object);
  }

  // Key of Operator
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((o) => o[property] === value);
  }
}

// Passing the generic type parameter

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

const store = new CompressibleStore<Product>();
store.compress();

let store1 = new Store<Product>();
store1.add({ name: "John", price: 100 });
store1.find("name", "John");

// Restricting generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  override find(name: keyof T): T | undefined {
    return this._objects.find((o) => o.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return this._objects.filter((o) => o.name === category);
  }
}

// Type Mapping
interface Product1 {
  name: string;
  price: number;
}
type ReadOnlyProduct = {
  readonly // Index signature
  [K in keyof Product1]: Product1[K];
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

// => Decorators

// function Component(constructor: Function) {
//   console.log("Component Decorator Called");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertDOM = () => {
//     console.log("Inserting element in the dom");
//   };
// }

type Component = {
  selector: string;
};

// Class Decorators

function Component(selector: Component) {
  return (constructor: Function) => {
    console.log("Component Decorator Called");
    constructor.prototype.options = selector;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDOM = () => {
      console.log("Inserting element in the dom");
    };
  };
}

function Pipe(constructor: Function) {
  console.log("Pipe Decorator Called");
  constructor.prototype.pipe = true;
}
@Component({ selector: "#my-component" })
@Pipe
class ProfileComponent {}

// let component = new ProfileComponent();
// console.log(component);

// Method decorators

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

class Person1 {
  @Log
  static say(message: string) {
    console.log("Person say " + message);
  }
}

// Access Decorators

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get as Function;

  descriptor.get = function () {
    const result = original.call(this);
    if (typeof result === "string") {
      return result.toUpperCase;
    }
    return result;
  };
}

class Person2 {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Property Decorator

function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(`${propertyName} should be at least ${length} long.`);

        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MinLength(4)
  _password: string;

  constructor(public password: string) {
    this._password = password;
  }
}

let user1: User = new User("1234");

// Parameter Decorators

type WatchParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchParameter[] = [];
function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({ methodName, parameterIndex });
}

class Vehicle {
  static move(@Watch speed: number) {}
}

console.log(watchedParameters)