// Counter 1
var counterValue1 = 0;
var counterElement1 = document.getElementById("counter1");

var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var value3 = document.getElementById("value3");

document.getElementById("plus1").addEventListener("click", function() {
    counterValue1++;
    counterElement1.textContent = counterValue1;
    value1.textContent = counterValue1;
});

document.getElementById("minus1").addEventListener("click", function() {
    if (counterValue1 > 0) {
        counterValue1--;
        counterElement1.textContent = counterValue1;
        value1.textContent = counterValue1;
    }
});

// Counter 2
var counterValue2 = 0;
var counterElement2 = document.getElementById("counter2");

document.getElementById("plus2").addEventListener("click", function() {
    counterValue2++;
    counterElement2.textContent = counterValue2;
    value2.textContent = counterValue2;
});

document.getElementById("minus2").addEventListener("click", function() {
    if (counterValue2 > 0) {
        counterValue2--;
        counterElement2.textContent = counterValue2;
        value2.textContent = counterValue2;
    }
});

// Counter 3
var counterValue3 = 0;
var counterElement3 = document.getElementById("counter3");

document.getElementById("plus3").addEventListener("click", function() {
    counterValue3++;
    counterElement3.textContent = counterValue3;
    value3.textContent = counterValue3;
});

document.getElementById("minus3").addEventListener("click", function() {
    if (counterValue3 > 0) {
        counterValue3--;
        counterElement3.textContent = counterValue3;
        value3.textContent = counterValue3;
    }
});