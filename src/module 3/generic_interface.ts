// Generic Interface

interface CrushInterface<T,U = null>{
    name:string,
    husband: T,
    wife ?: U
}


const crush1 : CrushInterface<boolean,string> = {name: "Sathi", husband: true, wife: "Setu"};

const crush2 : CrushInterface<string> = {name: "Sathi", husband: 'Mamun'};

const crush3 : CrushInterface<object> = {name:"Sathi",husband: {name:"Mamun",age: "22"}};

const crush4 : CrushInterface<{name:string,age:number}> = {name:"Sathi",husband: {name:"Mamun",age: 22}};

type newMamun = {name: string, age: number};


const crush5 : CrushInterface<newMamun> = {name:"Sathi",husband: {name:"Mamun",age: 22}};

interface HusbandInterface{
    name: string;
    age: number;
}

const crush6 : CrushInterface<HusbandInterface> = {name:"Sathi",husband: {name:"Mamun",age: 22}};


const crush7 : CrushInterface<{name:string,age:number}, {name:string,age:number}> = 
{name:"Sathi",
    husband: {name:"Mamun",age: 22}, 
    wife: {name:"Setu",age: 20}
};

const crush8 : CrushInterface<HusbandInterface,HusbandInterface> = 
{name:"Sathi",
    husband: {name:"Mamun",age: 22}, 
    wife: {name:"Setu",age: 20}
};