type User = {
    name : string;
    age : number;
};


type ExtendedUser = User & {
    role : string;
};

interface IUser {
    name : string;
    age : number;
}

interface IExtendedUser extends IUser {
    role : string;
}

const user : IExtendedUser = {
    name : "Alice",
    age : 30,
    role : "Admin"
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