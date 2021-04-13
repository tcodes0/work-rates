function hourlyToYearly(hourly) {
  return hourly * 1920.1755589082431;
}

function hourlyToMonthly(hourly) {
  return hourly * 160;
}

function monthlyToHourly(monthly) {
  return monthly / 160;
}

function monthlyToYearly(monthly) {
  return monthly * 12;
}

function yearlyToHourly(yearly) {
  return yearly / 1920.1755589082431;
}

function yearlyToMonthly(yearly) {
  return yearly / 12;
}

function printTable() {
  const empty = new Array(130).fill(0);
  const base = empty.map((x, i) => (i + 2) * 5000).reverse();
  const formatted = base.map((year) => ({
    Hourly: (year / 1920.1755589082431).toFixed(0),
    Yearly: `${year / 1000}k`,
    Monthly: `${parseFloat((year / 12000).toFixed(1))}k`,
  }));
  console.table(formatted);
}

module.exports = {
  hourlyToYearly,
  hourlyToMonthly,
  monthlyToHourly,
  monthlyToYearly,
  yearlyToHourly,
  yearlyToMonthly,
  printTable,
};
