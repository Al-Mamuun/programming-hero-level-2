type User = {
  name: string;
  age: number;
};

type ExtendedUser = User & {
  role: string;
};

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

const user: IExtendedUser = {
  name: "Alice",
  age: 30,
  role: "Admin",
};

// const userWithTypeAlias: User = {
//     name: "Type Alice",
//     age: 30
// };

// userWithTypeAlias.name = "Type Bob";

// const userWithInterface: IUser = {
//     name: "Interface",
//     age: 25
// };

// userWithInterface.name = "Interface Bob";

type AddFunction = (num1: number, num2: number) => number;
interface IAddFunction {
  (num1: number, num2: number): number;
}
const addNumber: AddFunction = (num1, num2) => num1 + num2;
const addNumber1: IAddFunction = (num1, num2) => num1 + num2;

addNumber(5, 10); // returns 15
addNumber1(5, 10); // returns 15

type RollNumber = number[];
interface IRollNumber {
  //[index : number] : number;
  [index: number]: string;
}
const rollNumber: RollNumber = [1, 2, 3, 4, 5];
const rollNumber1: IRollNumber = ["1", "2", "3", "4", "5"];
