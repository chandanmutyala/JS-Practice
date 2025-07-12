const array = ["Raj", "Amit", "Neha"];
const totalChars = array.reduce((acc, name) => acc + name.length, 0);
console.log(totalChars);