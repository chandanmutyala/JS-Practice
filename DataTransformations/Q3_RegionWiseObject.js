const finalOutput = {};
input.regions.forEach(reg => {
  const inner = {};
  reg.sales.forEach(sal => inner[sal.product] = sal.units);
  finalOutput[reg.region] = inner;
});
console.log(finalOutput);