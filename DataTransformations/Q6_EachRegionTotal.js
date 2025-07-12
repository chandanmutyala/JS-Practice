input.regions.forEach(reg => {
  let total = reg.sales.reduce((a,s) => a + s.units, 0);
  console.log(`${reg.region} region total units sold: ${total}`);
});