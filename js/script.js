function start() {
  switch (+prompt("Enter number of task")) {
    case 1:
      task1();
      break;
    case 2:
      task2();
      break;
    case 3:
      task3();
      break;
    case 4:
      task4();
      break;
    case 5:
      task5();
      break;
    case 6:
      task6();
      break;
    case 7:
      task7();
      break;
    case 8:
      task8();
      break;
    case 9:
      task9();
      break;
    case 10:
      task10();
      break;
    default:
      if (confirm("Wrong number! Try another or exit")) {
        start();
      } else {
        break;
      }
  }
}
function task1() {
  const name = prompt("Enter your name");

  alert(`Hello, ${name}`);

  start();
}
function task2() {
  const year = prompt("Enter your birth year");
  const currentYear = 2021;

  alert(`Your age - ${currentYear - year}`);

  start();
}
function task3() {
  const side = prompt("Enter side of a square");
  alert(`Perimeter = ${side * 4}`);
  start();
}
function task4() {
  const radius = prompt("Enter radius of a circle");

  alert(`Square of circle is ${Math.PI * radius ** 2}`);

  start();
}
function task5() {
  const distance = prompt("Enter distance");
  const time = prompt("Enter time");

  alert(`Speed is ${distance / time}`);

  start();
}
function task6() {
  const EUR_to_USD = 0.82;
  const usdSum = prompt("Enter usd sum");

  alert(`Eur sum is ${usdSum * EUR_to_USD}`);

  start();
}
function task7() {
  const value = prompt("Enter flash value");
  const MB_in_GB = 1024;
  const FILE_SIZE = 820;
  const valueMB = value * MB_in_GB;

  alert(`Max count of file ${(valueMB - (valueMB % FILE_SIZE)) / FILE_SIZE}`);

  start();
}
function task8() {
  const moneyInWallet = prompt("Enter the amount of money in the wallet");
  const priceOfChoco = prompt("Enter the price of choco");
  const change = moneyInWallet % priceOfChoco;

  alert(
    `Count of choco: ${
      (moneyInWallet - change) / priceOfChoco
    }\nChange: ${change}`
  );

  start();
}
function task9() {
  const threeDigitNumber = prompt("Enter three digit number");
  if (threeDigitNumber / 1000 > 0.999 || threeDigitNumber / 100 < 1) {
    alert("Wrong number! Enter another one!");
    task9();
  } else {
    let firstDigit = (threeDigitNumber - (threeDigitNumber % 100)) / 100;
    let thirdDigit = (threeDigitNumber - firstDigit * 100) % 10;
    let secondDigit = (threeDigitNumber - firstDigit * 100 - thirdDigit) / 10;
    alert(`New number ${thirdDigit * 100 + secondDigit * 10 + firstDigit}`);

    start();
  }
}
function task10() {
  const sum = prompt("Enter sum");
  const YEAR_PERCENT = 0.05;
  const MONTH_PERCENT = YEAR_PERCENT / 12;
  alert(
    `Percents sum: ${
      sum * MONTH_PERCENT + (sum * MONTH_PERCENT + sum) * MONTH_PERCENT
    }`
  );
}

start();
