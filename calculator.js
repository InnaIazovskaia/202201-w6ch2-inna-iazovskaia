const calculate = (a, b) =>
  `<p>${a} + ${b} = ${+a + +b}</p><p>${a} - ${b} = ${
    a - b
  }</p><p>${a} * ${b} = ${a * b}</p><p>${a} / ${b} = ${a / b}</p>`;

module.exports = calculate;
