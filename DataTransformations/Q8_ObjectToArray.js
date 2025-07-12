const obj = { A: 10, B: 20 };
const arr = Object.entries(obj).map(([k,v]) => ({ product: k, units: v }));
console.log(arr);