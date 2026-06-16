let currentFontSize =
    parseInt(localStorage.getItem("fontSize")) || 16;

document.body.style.fontSize =
    currentFontSize + "px";

const increaseBtn =
    document.getElementById("increase-font");

const decreaseBtn =
    document.getElementById("decrease-font");

const contrastBtn =
    document.getElementById("contrast-btn");

if (increaseBtn) {

    increaseBtn.addEventListener("click", () => {

        if (currentFontSize < 30) {

            currentFontSize += 2;

            document.body.style.fontSize =
                currentFontSize + "px";

            localStorage.setItem(
                "fontSize",
                currentFontSize
            );

        }

    });

}

if (decreaseBtn) {

    decreaseBtn.addEventListener("click", () => {

        if (currentFontSize > 12) {

            currentFontSize -= 2;

            document.body.style.fontSize =
                currentFontSize + "px";

            localStorage.setItem(
                "fontSize",
                currentFontSize
            );

        }

    });

}

const highContrast =
    localStorage.getItem("highContrast");

if (highContrast === "true") {

    document.body.classList.add(
        "high-contrast"
    );

}

if (contrastBtn) {

    contrastBtn.addEventListener("click", () => {

        document.body.classList.toggle(
            "high-contrast"
        );

        localStorage.setItem(
            "highContrast",
            document.body.classList.contains(
                "high-contrast"
            )
        );

    });

}