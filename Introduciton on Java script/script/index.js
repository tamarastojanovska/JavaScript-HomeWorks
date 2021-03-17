function fixOrder() {
    let numPrice;
    let tax;
    let total;

    numPrice = parseFloat(document.getElementById("cost").value);
    tax      = parseFloat(document.getElementById("tax").value);
    total    = parseFloat(document.getElementById("total").value);

    

    numPrice = numPrice * tax;
    total    = numPrice;
    total    = document.getElementById("total").value = "$" + total.toFixed(2);

    if (isNaN(numPrice)) {
        alert("place order");
        numPrice = 0;
    }
}