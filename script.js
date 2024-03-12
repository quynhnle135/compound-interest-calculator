function calculateInterest() {
  const P = parseFloat(document.getElementById("initial").value);
  const C = parseFloat(document.getElementById("contribution").value);
  let r = parseFloat(document.getElementById("interest").value);
  r = r / 100 / 12;
  const t = parseFloat(document.getElementById("length").value);
  const n = 12 * t;

  let result =
    Math.round(
      (P * Math.pow(1 + r, n) +
        ((C * (Math.pow(1 + r, n) - 1)) / r) * (1 + r)) *
        100
    ) / 100;

  document.getElementById("result").innerText = `You will have: $${result}`;
}
