let total = 0;

function addItem(price) {
  total += price;
  document.getElementById("total").innerText = total;

  const upi =
    "upi://pay?pa=darlingz@axl&pn=Avva%20Tiffins&am=" +
    total +
    "&cu=INR";

  document.getElementById("upiLink").href = upi;
}
