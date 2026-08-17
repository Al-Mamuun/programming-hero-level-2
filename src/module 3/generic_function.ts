//  Arrow Function

const createArray = (param:string): string[] => {
    return [param];
}

const createArray3 = <X,Y>(param1:X,param2:Y): [X,Y] => {
    return [param1,param2];
}
 // Non-Arrow Function
function createArray4 <X,Y> (param1:X,param2:Y): [X,Y] {
    return [param1,param2];
}

const createArray2 = <T,U>(param:T,param2:U): [T,U] => {
    return [param,param2];
}

const Mamun = createArray2<string,string>("Mamun","Rafi");
const Sakib = createArray2<number,Array<number>>(25,[1,2,3]);
const Tamim = createArray2<boolean,undefined>(true,undefined);

const Munni = createArray2<object,object>({name:"Munni",age: "22"},{name:"Munni",age: 22});
const Munni2 = createArray2<{name:string,age:number},{name:string,age:number}>({name:"Munni",age: 22},{name:"Munni",age: 22});


// Spread Operator

// const crush = "Pori Moni";
// const myInfo = {
//     name: "Mamun",
//     age: 25,
//     salary: 25000
// }

// const newInfo = {...myInfo, crush};

const addMeInMyCrushMind = <T>(myInfo:T) => {
    const crush = "Pori Moni";
    const newData = {...myInfo,crush};
    return newData;
}

const myInfo = {
    name: "Mamun",
    age: 25,
    salary: 25000
}

const newInfo = addMeInMyCrushMind(myInfo);
const newInfo1 = addMeInMyCrushMind<{name:string,age:number,salary:number}>(myInfo); 