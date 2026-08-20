type PersonType = {
    name : string;
    age : number;
    address : string;
};

type newType = "name" | "age" | "address";


type newTypeUsingKeyof = keyof PersonType;

// const a: newType = "age"; // Manually defined type

// const b: newTypeUsingKeyof = "name"; // Type derived from PersonType using keyof



function getProperty<X, Y extends keyof X>(object : X, key : Y){
    return object[key];
}

const property = getProperty({name:"John", age:30}, "age"); // This will