"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// console.log(add(5, 10));
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((element) => element * element);
const person = {
    name: "John",
    balance: 5,
    addBalance(money) {
        return this.balance + money;
    }
};
// spread operator
const myFriend = ["Mamun", "Rafi", "Sakib", "Rasel"];
const newFriend = ["Tania", "Sathi", "Setu", "Prity"];
myFriend.push(...newFriend);
// console.log(myFriend);
// rest operator
// const greetFriends = (
//     friend1 : string,
//     friend2 : string,
//     friend3 : string,
// ) : void => console.log(`\n Hi ${friend1} \n Hi ${friend2} \n Hi ${friend3}`);
// greetFriends("Mamun", "Rafi", "Sakib");
const greetFriends = (...friends) => friends.forEach((friend) => console.log(`\n Hi ${friend}`));
greetFriends("Mamun", "Rafi", "Sakib", "Bro");
//# sourceMappingURL=function.js.map