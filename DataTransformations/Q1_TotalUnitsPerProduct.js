var output = {};
input.regions.forEach(obj => obj.sales.forEach(s => {
  let prod = s.product;
  let value = s.units;
  output[prod] = (output[prod] || 0) + value;
}));
console.log(output);