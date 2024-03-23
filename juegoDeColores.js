const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const colorFinal = document.querySelector(".color--final");
let combinacion = [];

const eliminarElemento = elemento => {
    const index = combinacion.indexOf(elemento);
    combinacion.splice(index, 1);
    
    colorFinal.style.background = "#FFFFFF";
};

const combinarColor = () => {
    if (combinacion.length === 3) {
        colorFinal.style.background = "rgb(129, 99, 15)";
    } else if (combinacion.includes("A") && combinacion.includes("B")) {
        colorFinal.style.background = "rgb(0, 176, 59)";
    } else if (combinacion.includes("A") && combinacion.includes("C")) {
        colorFinal.style.background = "rgb(97, 0, 145)";
    } else if (combinacion.includes("B") && combinacion.includes("C")) {
        colorFinal.style.background = "rgb(255, 145, 1)";
    }
};

div1.addEventListener("click", () => {
    div1.classList.toggle("div--active");
    if (combinacion.includes("A")) {
        eliminarElemento("A");
        combinarColor();
        return;
    }
    combinacion.push("A");
    combinacion.sort();
    combinarColor();
});
div2.addEventListener("click", () => {
    div2.classList.toggle("div--active");
    if (combinacion.includes("B")) {
        eliminarElemento("B");
        combinarColor();
        return;
    }

    combinacion.push("B");
    combinacion.sort();
    combinarColor();
});
div3.addEventListener("click", () => {
    div3.classList.toggle("div--active");
    if (combinacion.includes("C")) {
        eliminarElemento("C");
        combinarColor();
        return;
    }
    combinacion.push("C");
    combinacion.sort();
    combinarColor();
});
