function calculate() {
    // Get user input from the drop-down lists
    var var1 = document.getElementById("var1").value;
    var var2 = document.getElementById("var2").value;
    var var3 = document.getElementById("var3").value;

    // Convert var1 to a float to use in calculations
    if (var1 == '1-10') {
      var1 = 5;
    } else if (var1 == '11-20') {
      var1 = 15;
    } else {
      var1 = 25;
    }

    // Convert var3 to a float by removing the percentage sign
    var3 = parseFloat(var3)/100;

    // Calculate the result
    var result = Math.round(Math.random() * (5000 - 1000) + 1000 * (var1 / var3) * var2) / 100;

    // Display the result in a sentence
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "With " + var1 + " variable power units improving your " + var2 + " variable by " + var3 * 100 + "% could save you $" + result + " per year on insurance.";
  }