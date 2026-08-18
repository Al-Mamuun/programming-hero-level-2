const addMeInMyCrushMind = <T>(myInfo:T) => {
    const crush = "Pori Moni";
    const newData = {crush,...myInfo};
    return newData;
}

type MyInfoType = {
    name: string;
    age: number;
    salary: number;
}

const myInfo : MyInfoType = {
    name: "Mamun",
    age: 25,
    salary: 25000
}

const result = addMeInMyCrushMind<MyInfoType>(myInfo);
console.log(result);