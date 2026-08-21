
const makePromise = () : Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data : string = "Data is fetched";
        if (data) {
            resolve(data);
        } else {
            reject("Failed to fetch data");
        }
    });
};

const getPromiseData = async () : Promise<string> => {
   const data = await makePromise();
   console.log(data);
   return data;
};


getPromiseData().then((data) => {
    console.log("Promise resolved with data:", data);
}).catch((error) => {
    console.error("Promise rejected with error:", error);
}   );

