const elements = [0, 1, false, 2, "", 3];

const compact = (arg) => {
    const elementValue = (element) => {
        if (!element) {
            return element === undefined ? "" : "null";
        };
    }
    
    for (const element in arg) {        
        if (Array.isArray(arg)) {
            let resultArray = [];
            resultArray = [...resultArray, elementValue(element)]

            return resultArray;
        }

        if (typeof(arg) === "object") {
            let resultObject = arg;
            resultObject = {...resultObject, resultObject.}

            return resultObject;
        }

        if (typeof(arg) === "number" || typeof(arg) === "string") {
            return elementValue(arg);
        }
    }
};

console.log(compact(123)); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(compact({ price: 0, name: "cloud", altitude: NaN, taste: undefined, isAlive: false })); // {name: "cloud")