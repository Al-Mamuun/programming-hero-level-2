type CrushType = {name: string, age: number, salary: number}
interface CrushInterface {
    name: string;
    age: number;
    salary: number;
}
const addMeInMyCrushMind = <T extends CrushType>(myInfo:T) => {
    const crush = "Pori Moni";
    const newData = {crush,...myInfo};
    return newData;
}

type MyInfoType = {
    name: string;
    age: number;
    salary: number;
    others1?: boolean;
    others2?: null
}

const myInfo : MyInfoType = {
    name: "Mamun",
    age: 25,
    salary: 25000,
    others1: false,
    others2: null
}

const result = addMeInMyCrushMind(myInfo);
const result1 = addMeInMyCrushMind({name: "Mamun", age: 24, salary: 20000});
console.log(result);
console.log(result1);
