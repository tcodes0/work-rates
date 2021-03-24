const empty = new Array(130).fill(0);
const base = empty.map((x, i) => (i + 2) * 5000).reverse();
const formatted = base.map((year) => ({
  Hourly: (year / 1920.1755589082431).toFixed(0),
  Yearly: `${year / 1000}k`,
  Monthly: `${parseFloat((year / 12000).toFixed(1))}k`,
}));
console.table(formatted);
