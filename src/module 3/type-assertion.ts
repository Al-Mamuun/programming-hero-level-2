let emni : any;

emni = "Next Level Web Development";

const A = (emni as string ).length;
console.log(A);

function KgToGram(param: string | number): string | number  | undefined {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted value is ${value} gram`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return `The converted value is ${value} gram`;
    }
}

const result = KgToGram(1) as number;
console.log(result);

const result2 = KgToGram("2") as string;
console.log(result2);


