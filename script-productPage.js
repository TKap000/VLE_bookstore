// Product page quantity suurendamine ja vähendamine

document.addEventListener("DOMContentLoaded", function() {

    const decrementButton = document.getElementById("decrement");
    const incrementButton = document.getElementById("increment");
    const quantityDisplay = document.getElementById("quantity");

    decrementButton.addEventListener("click", () => {
        // Võtan praeguse arvu suuruse ja muudan selle arvuks
        let currentQuantity = parseInt(quantityDisplay.textContent);

        // Kontrollin, et arv ei lähe alla 1
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityDisplay.textContent = currentQuantity;
        }
    });

    incrementButton.addEventListener("click", () => {
        // Võtan praeguse arvu suuruse ja muudan selle arvuks
        let currentQuantity = parseInt(quantityDisplay.textContent);

        // Suurendan väärtust
        currentQuantity++;
        quantityDisplay.textContent = currentQuantity;
    });
});