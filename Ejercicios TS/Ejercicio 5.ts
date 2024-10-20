const swap = <B, A>(arg1: A, arg2: B): [B, A] => {
    return [arg2, arg1];
};

let age: number, occupation: string;

[occupation, age] = swap(39, "Placement officer");
console.log("Occupation: ", occupation);
console.log("Age: ", age);