// const arr = [1,2,3,4]

// const newArr = arr.map((element:number) => element*element);
// console.log(newArr)


// const hmm = [5,6,7,8]
// const newHmm = hmm.map((number: number) => number+number);
// console.log(newHmm)


// const person : {
//     name: string;
//     balance : number;
//     addBalance(amount:number):number
// } = {
//     name: "Mamun",
//     balance: 50,
//     addBalance(amount:number):number{
//         return this.balance+amount;
//     }
// }
// console.log(person.name)
// console.log(person.balance)
// console.log(person.addBalance(5))


// const myFriend = ["Mamun", "Rafi", "Sakib", "Rasel"];
// const newFriend = ["Tania","Sathi","Setu","Prity"];

// myFriend.push(...newFriend);
// console.log(myFriend);

// const mamun = newFriend[0]
// console.log(mamun)


// const greedFriend = (
//     friend1 : string ,
//     friend2 : string,
//     friend3 : string
// ): void => console.log(`\nHi ${friend1} \n Hi ${friend2} \n Hi ${friend3}`)

// greedFriend("Mamun","Akash","Hasib")

// const greetFriends = (...friends: string[]) : void => friends.forEach((friend) => console.log(`\n Hi ${friend}`));

// greetFriends("Mamun", "Rafi", "Sakib","Bro","Akash","Pinik");


// const greedFriend = (...friends : string[]) : void => friends.forEach((friend)=> console.log(`\n Hi ${friend}`))

// greedFriend("Mamun","Akash")


// const chuna = (...mamun : number[]) : void => mamun.forEach((hmm)=> console.log(`\n hi ${hmm}`))

// chuna(1,2,3,4)


// const myFriend = ["Mamun", "Rafi", "Sakib", "Rasel"];

// const bestFriend = {
//     name : "Hasina",
//     age : 24,
//     address : "Dhaka"
// }


// const mamun = myFriend[0];
// const [,,,tanvir] = myFriend;
// console.log(tanvir)
// console.log(mamun)

// const {name : fullname} = bestFriend;
// console.log(fullname)


// const friends = ["Mamun", "Rafi", "Sakib", "Akash"];

// const [bestFriend] = friends;

// console.log(bestFriend);

// const isAuthenticated = "";
// const userName = isAuthenticated ?? "Guest";
// const userName1 = isAuthenticated ? isAuthenticated : "Guest";
// console.log({userName},{userName1});

// const age = "";

// // const newPerson = age >= 18 ? "Yess Voter" : "No Voter";
// const newPerson = age ? age : "Guest";
// const newAge = age ?? "Guest";
// console.log({newPerson},{newAge});

// type Person = {
//     name : string,
//     age : number,
//     address:{
//         city : "Dhaka",
//         home ?: string
//     }
// }

// const Mamun : Person = {
//     name: "Mamun",
//     age : 22,
//     address :{
//         city : "Dhaka",
//         home : "Dhanmondi"
//     }
// }

// console.log(Mamun.address.city)


// type Manus = {
//     name : string;
//     age : number;   
//     address : {
//         city : "No City",
//         road : "No Road",
//         home ?: " "
//     }
// }

// const manush1 : Manus = {
//     name : "John Doe",
//     age : 30,
//     address : {
//         city : "No City",
//         road : "No Road"
//     }
// }

// // const home = manush1?.address?.home ?? "Hello"; // default 'No Home'
// const home = manush1 ?. address ?. home ?? "Nai"
// console.log(home);

// const searchName = (value : string | null) => {
//     if (value === null)
//     {
//         console.log("There is nothing to search")
//     }
//     else{
//         console.log("Searching....")
//     }
// }

// searchName(null)
// searchName("Mamun")

// const carSpeed = (speed:unknown) => {
//     if (typeof speed === "number")
//     {
//         const convertSpeed = (speed * 1000) / 3600;
//         console.log(`My car speed is ${convertSpeed} m/s`)
//     }
//     if (typeof speed === "string")
//     {
//         const [value,unit] = speed.split(" ");
//         const convertSpeed = (parseFloat(value) * 1000)/3600;
//         console.log(`My car speed is ${convertSpeed} m/s`)
//     }
//     else{
//         console.log("Please provide a valid speed");
//     }
// }

// carSpeed(50);
// carSpeed("50 kmh");

