// Calculate compound interest with monthly contribution
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

// Calculate monthly contribution
function calculateMonthlyContribution() {
  const P = parseFloat(document.getElementById("principal").value);
  const V = parseFloat(document.getElementById("expected").value);
  let r = parseFloat(document.getElementById("rate").value);
  r = r / 100 / 12;
  const t = parseFloat(document.getElementById("period").value);
  const n = 12 * t;

  let result = Math.round(
    (V - P * Math.pow(1 + r, n)) / ((Math.pow(1 + r, n) - 1) / r)
  );
  document.getElementById(
    "monthlyContribution"
  ).innerText = `Monthly Contribution: $${result}`;
}
