type GenericArray<T> = Array<T>;


type GenericTuple<X, Y> = [X, Y];

const relation : GenericTuple<string, string> = ['Mamun', 'Rafi'];

const rollNumber : GenericArray<number> = [1,2,3,4,5];

const nameList : GenericArray<string> = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

const booleanList : GenericArray<boolean> = [true, false, true, false, true];

type NameRollType = {name: string, roll: number};

const newMamun : GenericArray<NameRollType> = [
    {name: 'Mamun', roll: 1},{name: 'Rafi', roll: 2},{name: 'Sakib', roll: 3},{name: 'Rasel', roll: 4}
];

console.log(newMamun);


const newMamun2: GenericTuple <{name: string,age: number}, boolean> = [{name: 'Mamun', age: 22}, true];

// type RelationWithSalaryType = {name: string, salary: number};

interface RelationWithSalaryTypeInterface {
    name: string;
    salary: number;
}

const newMamun3: GenericTuple <RelationWithSalaryTypeInterface, boolean> = [{name: 'Mamun', salary: 22}, true];