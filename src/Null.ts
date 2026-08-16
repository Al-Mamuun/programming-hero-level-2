// const searchName = (value : string | null) =>{
//     if (value === null)
//     {
//         console.log('There is nothing to search');
//     }
//     else{
//         console.log('Searching...');
//     }
// }

// searchName("MAMUN");
// searchName(null);


const getMyCarSpeed = (speed : unknown) => {
    if (typeof speed === "number")
    {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My car speed is ${convertedSpeed} m/s`);
    }

    if (typeof speed === "string")
    {
        const [value,unit] = speed.split (" "); // ["50", "km/h"]

        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My car speed is ${convertedSpeed} m/s`);
    }
    else{
        console.log("Please provide a valid speed");
    }
}

getMyCarSpeed(50);
getMyCarSpeed("50 km/h");
getMyCarSpeed(true);


function throwError(message: string): never {
    throw new Error(message);
}

throwError("Vai error hoyeche");