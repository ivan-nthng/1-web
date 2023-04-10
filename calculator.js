function calculate() {
  // Get user input from the drop-down lists
  var var1 = document.getElementById("var1").value;
  var var2 = document.getElementById("var2").value;
  var var3 = document.getElementById("var3").value;

  // Convert var1 to a float to use in calculations
  if (var1 == "0") {
    var1 = 0
  } else if (var1 == '1-10') {
    var1 = 5;
  } else if (var1 == '11-20') {
    var1 = 15;
  } else {
    var1 = 25;
  }

  if (var2 == 'Vehicle Maintenance') {
    var2 = 1.4;
  } else if (var2 == 'Driver Qualification') {
    var2 = 1.1;
  } else if (var2 == 'Unsafe Driving') {
    var2 = 2;
  } else if (var2 == 'Drug and Alcohol Testing') {
    var2 = 2.4;
  } else if (var2 == 'Hours of Service') {
    var2 = 2.4;
  } else if (var2 == 'Accidents') {
    var2 = 2.4;
  }

  // Convert var3 to a float by removing the percentage sign
  var3 = parseFloat(var3) / 100;

  // Calculate the result
  var result = Math.round(Math.random() * (5000 - 1000) + 1000 * (var1 / var3) * var2) / 100;

  // Display the result in a sentence
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "$" + result;
}