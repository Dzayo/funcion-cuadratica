const inputA = document.querySelector("#coef-A");
const inputB = document.querySelector("#coef-B");
const inputC = document.querySelector("#coef-C");
const btn = document.querySelector("#btn");
const label_x1 = document.querySelector("#x1");
const label_x2 = document.querySelector("#x2");

function fgeneral(a,b,c) {
    const valor_interno_raiz = b*b-4*a*c;
    if (valor_interno_raiz > 0) {
        const raiz = Math.sqrt(valor_interno_raiz);
        const x1 = (-b+raiz)/(2*a);
        const x2 = (-b-raiz)/(2*a);
        return [x1,x2];
    }
    return "No tiene solucion real";
}

btn.onclick = function() {
    const a = inputA.value;
    const b = inputB.value;
    const c = inputC.value;

    const resultado = fgeneral(a,b,c);
    if (typeof(resultado) == "object") {
        const [x1,x2] = resultado;
        label_x1.innerHTML = `${x1}`;
        label_x2.innerHTML = `${x2}`;
    }
    if (typeof(resultado) == "string") {
        label_x1.innerHTML = resultado;
        label_x2.innerHTML = resultado;
    }
};