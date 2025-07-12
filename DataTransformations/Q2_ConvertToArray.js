const output = { A: 30, B: 15, C: 18 };
const res = Object.entries(output).map(([k,v]) => ({ product: k, totalUnits: v }));
console.log(res);