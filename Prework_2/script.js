const calculateButton = document.getElementById("calculateButton");
const output = document.querySelector(".output");

calculateButton.addEventListener("click", function() {
    const billAmount = document.getElementById("billAmount").value;
    const tipPercentage = document.getElementById("tipPercentage").value;
    const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    const totalAmount = (parseFloat(billAmount) + parseFloat(tipAmount)).toFixed(2);
  
    output.innerHTML = `<h1>You should tip $${tipAmount} on $${billAmount}.<br>Total amount to be paid: $${totalAmount}</h1>`;
});
