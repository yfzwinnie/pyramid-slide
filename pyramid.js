var rangeInput = document.getElementById('rangeinput');
var symInput = document.getElementById('symbol');
var symInputValue = symInput.options[symInput.selectedIndex].text;

console.log(symInputValue);

function showVal(newVal){
  document.getElementById("rangevalue").innerHTML=newVal;
}

var container = document.createElement('div');
container.id = "container";
var layout = document.getElementById('pyramid');
layout.appendChild(container);

symInput.addEventListener('change', function() {
  symInputValue = symInput.options[symInput.selectedIndex].text;
  drawPyramid();
});

rangeInput.addEventListener('input', drawPyramid );


function drawPyramid() {
  var height = rangeInput.value
  container.innerHTML = "";
  for (var i = 1; i <= height; i++) {
    var row = '<p>';
    for (var j = 1; j <= (height-i+1); j++) {
      row += String.fromCharCode(160);
    }
    for (var k = 1; k <= i+1; k++) {
      row += symInputValue;
    }
    row += '</p>';
    container.innerHTML += row;
    console.log(row);
  }
  showVal(height);
}
