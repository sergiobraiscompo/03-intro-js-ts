const elements = [0, 1, false, 2, "", 3];

const compact = (arg) => {
  if (!arg) {
    return arg === undefined ? "" : "null";
  }

  if (typeof arg === "number" || typeof arg === "string") {
    return arg;
  }

  if (Array.isArray(arg)) {
    let resultArray = [];

    arg.map((element) => {
      const value = element ?? "";
      value ? (resultArray = [...resultArray, value]) : "";
    });

    return resultArray;
  }

  if (typeof arg === "object") {
    if (arg.length === 0) {
      return arg;
    } else {
      let resultObject = {};

      for (const element in arg) {
        const value = arg[element];
        value ? resultObject = {...resultObject, element: value} : "";
      }

      return resultObject;
    }
  }
};

console.log(compact(123)); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(
  compact({
    price: 0,
    name: "cloud",
    altitude: NaN,
    taste: undefined,
    isAlive: false,
  })
); // {name: "cloud")
