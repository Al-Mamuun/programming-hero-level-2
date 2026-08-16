type CrushType = {
    name: string;
    age ?: number;
    profession: string;
    address:string;
}

const crush1 :CrushType = {
    name: "Moina Pakhi",
    age: 22,
    profession: "Webdeveloper",
    address: "Dhaka, Bangladesh"
}

const crush2 :CrushType = {
    name: "Tiya Pakhi",
    profession: "Student",
    address: "Dhaka, Bangladesh"
}

type CrushMarriedType = boolean;
const isCrushMarried : CrushMarriedType = false;

type CourseType = string;
const courseName : CourseType = "Next Level Web Development Course";

type OperationType = (x:number, y:number) => number;
const calculate = (x:number, y:number, operation:OperationType) => {
    return operation(x, y);
};

console.log(calculate(10, 20, (x, y) => x + y));
console.log(calculate(10, 20, (x, y) => x - y));
console.log(calculate(10, 20, (x, y) => x * y));
console.log(calculate(10, 20, (x, y) => x / y));