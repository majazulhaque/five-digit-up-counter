import "./styles.css";

var counterBtn = document.querySelector("#input-button > button");
var countNo = document.querySelectorAll(".animation > p");

var countInterval;
counterBtn.addEventListener("click", runCounter);
function runCounter() {
  var number = parseInt(document.getElementById("number").value, 0);
  if (isNaN(number)) {
    alert("Please enter a number");
    clearInterval(countInterval);
    return;
  } else if (number < 1 || number > 100000) {
    alert("Range out of bounds");
    clearInterval(countInterval);
    return;
  } else {
    resetNumbers(countNo);
    clearInterval(countInterval);
    var num = 1;
    countInterval = setInterval(function () {
      if (num > number) {
        clearInterval(countInterval);
        return;
      }
      increaseCount(countNo, num);
      num++;
    }, 1000);
  }
}

function resetNumbers(countNo) {
  for (var i = 0; i < countNo.length; i++) {
    countNo[i].innerText = 0;
  }
}
function increaseCount(countNo, num) {
  var currVal = num;
  setTimeout(function () {
    for (var i = 4; i >= 0; i--) {
      var temp = currVal % 10;
      currVal = currVal / 10;
      countNo[i].innerText = parseInt(temp, 0);
    }
  }, 500);
}
