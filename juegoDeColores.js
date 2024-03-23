const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const colorFinal = document.querySelector(".color--final");
let combinacion = [];

const eliminarElemento = elemento => {
    const index = combinacion.indexOf(elemento);
    combinacion.splice(index, 1);
    colorFinal.style.background = "#ffffff";
};

const combinarColor = () => {
    if (combinacion.length === 3) {
        colorFinal.style.background = "rgb(129, 99, 15)";
    } else if (combinacion.includes("A") && combinacion.includes("B")) {
        colorFinal.style.background = "rgb(0, 176, 59)";
    } else if (combinacion.includes("B") && combinacion.includes("C")) {
        colorFinal.style.background = "rgb(97, 0, 145)";
    } else if (combinacion.includes("A") && combinacion.includes("C")) {
        colorFinal.style.background = "rgb(255, 145, 1)";
    }
};

div1.addEventListener("click", e => {
    div1.classList.toggle("div--active");

    if (combinacion.includes("A")) {
        eliminarElemento("A");

        combinarColor();
        return;
    }
    if (div1.classList.contains("div--active")) {
        combinacion.push("A");
    }
    combinacion.sort();
    combinarColor();
});

div2.addEventListener("click", e => {
    div2.classList.toggle("div--active");

    if (combinacion.includes("B")) {
        eliminarElemento("B");

        combinarColor();
        return;
    }
    if (div2.classList.contains("div--active")) {
        combinacion.push("B");
    }
    combinacion.sort();
    combinarColor();
});

div3.addEventListener("click", e => {
    div3.classList.toggle("div--active");

    if (combinacion.includes("C")) {
        eliminarElemento("C");

        combinarColor();
        return;
    }
    if (div3.classList.contains("div--active")) {
        combinacion.push("C");
    }
    combinacion.sort();
    combinarColor();
});
