function uniqueProductNames(input) {
  const output = [];
  input.regions.forEach(r => r.sales.forEach(s => {
    if (!output.includes(s.product)) output.push(s.product);
  }));
  return output;
}