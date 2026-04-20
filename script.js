let count = 0;

function updateDisplay() {
    document.getElementById("count").innerText = count;
}

function increase() {
    count++;
    updateDisplay();
    document.getElementById("message").innerText = "";
}

function decrease() {
    if (count > 0) {
    count--;
    updateDisplay();
        document.getElementById("message").innerText = "";
    } else {
    document.getElementById("message").innerText = "Careful Your Bawlz May Fall Off";
    }
}

function reset() {
    count = 0;
    updateDisplay();
    document.getElementById("message").innerText = "";
}