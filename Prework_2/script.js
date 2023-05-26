const calculateButton = document.getElementById("calculateButton");
const output = document.querySelector(".output");

calculateButton.addEventListener("click", function() {
    const billAmount = document.getElementById("billAmount").value;
    const tipPercentage = 15;
    const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    const formattedBillAmount = parseFloat(billAmount).toFixed(2);
  
    output.innerHTML = `<h1>You should tip $${tipAmount} on $${formattedBillAmount}</h1>`;
});
