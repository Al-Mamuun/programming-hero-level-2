// ternary Operator

const age:number = 22;

// if (age >= 18)
// {
//     console.log("You are eligible to vote");
// }
// else
// {
//     console.log("You are not eligible to vote");
// }

const isAdult = age >= 18 ? "Yes" : " No";
console.log(isAdult);

// Nullish Coalescing Operator
// null and undefined er khetre default value use kora hoy

const isAuthenticated = "";
const userName = isAuthenticated ?? "Guest";
const userName1 = isAuthenticated ? isAuthenticated : "Guest";
console.log({userName},{userName1});


type Manus = {
    name : string;
    age : number;   
    address : {
        city : "No City",
        road : "No Road",
        home ?: " "
    }
}

const manush1 : Manus = {
    name : "John Doe",
    age : 30,
    address : {
        city : "No City",
        road : "No Road"
    }
}

const home = manush1?.address?.home ?? "No Home"; // default 'No Home'
console.log(home);