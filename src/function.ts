function add(num1:number,num2:number):number{
    return num1 + num2;
}

add(5, 10);

// console.log(add(5, 10));

const addArrow = (num1:number, num2:number):number => num1+num2;
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((element : number) => element * element);


const person :
    {name: string, 
    balance: number, 
    addBalance(money: number): number}
    = {
    name: "John",
    balance:5,
    addBalance(money:number){
        return this.balance + money;
    }
}


// spread operator

// const myFriend = ["Mamun", "Rafi", "Sakib", "Rasel"];
// const newFriend = ["Tania","Sathi","Setu","Prity"];

// myFriend.push(...newFriend);

// console.log(myFriend);

// rest operator

// const greetFriends = (
//     friend1 : string,
//     friend2 : string,
//     friend3 : string,
// ) : void => console.log(`\n Hi ${friend1} \n Hi ${friend2} \n Hi ${friend3}`);

// greetFriends("Mamun", "Rafi", "Sakib");



const greetFriends = (...friends: string[]) : void => friends.forEach((friend) => console.log(`\n Hi ${friend}`));

greetFriends("Mamun", "Rafi", "Sakib","Bro","Akash","Pinik");


// array and object destructuring

const myFriend = ["Mamun", "Rafi", "Sakib", "Rasel"];

const myBestFriend = {
    Name: "Akash",
    age: 24,
    address: "Dhaka"
}

const [bestFriend] = myFriend; // myFriend[0] will be assigned to bestFriend
const {Name : FullName} = myBestFriend;

console.log(bestFriend);
console.log('\n' + FullName);


// const friends = ["Mamun", "Rafi", "Sakib", "Akash"];

// const [bestFriend] = friends;

// console.log(bestFriend);