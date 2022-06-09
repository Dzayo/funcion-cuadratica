const inputA = document.querySelector("#coef-A");
const inputB = document.querySelector("#coef-B");
const inputC = document.querySelector("#coef-C");
const inputX = document.querySelector("#eval-x");
const btn = document.querySelector("#btn");
const label_x1 = document.querySelector("#x1");
const label_x2 = document.querySelector("#x2");
const label_vert = document.querySelector("#vertice");
const label_minmax = document.querySelector("#minmax");
const label_ord = document.querySelector("#ordenada");
const label_eval = document.querySelector("#eval");

function fgeneral(a,b,c) {
    const valor_interno_raiz = b*b-4*a*c;
    if (valor_interno_raiz >= 0) {
        const raiz = Math.sqrt(valor_interno_raiz);
        const x1 = (-b+raiz)/(2*a);
        const x2 = (-b-raiz)/(2*a);
        return [x1,x2];
    }
    return "No tiene solucion real";
}

function f(x) {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const c = parseFloat(inputC.value);
    const fx = a*x*x + b*x + c;
    return fx;
}

function hallar_vertice(a,b) {
    const x = -b/(2*a);
    let minmax = "";
    if (a > 0) {minmax = "mínimo"}
    else {minmax = "máximo"}
    return [x,f(x),minmax];
}

btn.onclick = function() {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const c = parseFloat(inputC.value);
    const x = parseFloat(inputX.value);

    const raices = fgeneral(a,b,c);
    const [xv,yv,minmax] = hallar_vertice(a,b);
    const ordenada = f(0);
    const fx = f(x);
    if (typeof(raices) == "object") {
        const [x1,x2] = raices;
        label_x1.innerHTML = `${x1}`;
        label_x2.innerHTML = `${x2}`;
    }
    if (typeof(raices) == "string") {
        label_x1.innerHTML = raices;
        label_x2.innerHTML = raices;
    }
    label_vert.innerHTML = `(${xv},${yv})`;
    label_minmax.innerHTML = `${minmax}`;
    label_ord.innerHTML = `${ordenada}`;
    label_eval.innerHTML = `${fx}`;
};