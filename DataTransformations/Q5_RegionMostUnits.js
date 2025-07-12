let totalUnits = 0, region = "";
input.regions.forEach(reg => {
  let units = reg.sales.reduce((a,s) => a + s.units, 0);
  if (units > totalUnits) { totalUnits = units; region = reg.region; }
});
console.log(`${region} has most total units: ${totalUnits}`);