const input = [{ id: 1, score: 80 }, { id: 2, score: 90 }];
const output = {};
input.forEach(obj => output[obj.id] = obj.score);
console.log(output);