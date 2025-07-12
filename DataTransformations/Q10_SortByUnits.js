const input = [{product: "X", units: 50}, {product: "Y", units: 120}];
input.sort((a, b) => b.units - a.units);
console.log(input);