document.getElementById("beautifyButton").addEventListener("click", function() {
    var inputArea = document.getElementById("inputArea");
    var outputArea = document.getElementById("outputArea");
    var inputJSON = inputArea.value;

    try {
      var beautifiedJSON = JSON.stringify(JSON.parse(inputJSON), null, 2);
      outputArea.textContent = beautifiedJSON;
    } catch (error) {
      outputArea.textContent = "Invalid JSON!";
    }
  });