const ids = [101, 102];
const names = ["Ram", "Shyam"];
const output = ids.map((id, i) => ({ id, name: names[i] }));
console.log(output);