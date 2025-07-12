const array = [{product: "A", units: 2}, {product: "B", units: 3}];
console.log(array.map(obj => `${obj.product}: ${obj.units}`));