const form = document.getElementById("calcForm");
const errorMsg = document.getElementById("error");
const historyDiv = document.getElementById("historyList");

let history = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    errorMsg.textContent = "";

    const a = document.getElementById("numA").value;
    const b = document.getElementById("numB").value;
    const op = document.getElementById("operation").value;

    if (a === "" || b === "") {
        errorMsg.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    const numA = Number(a);
    const numB = Number(b);

    if (op === "/" && numB === 0) {
        errorMsg.textContent = "Division par zéro interdite.";
        return;
    }

    let result;
    switch (op) {
        case "+": result = numA + numB; break;
        case "-": result = numA - numB; break;
        case "*": result = numA * numB; break;
        case "/": result = numA / numB; break;
    }

    const operationText = `${numA} ${op} ${numB} = ${result}`;
    history.push(operationText);

    updateHistory();
});

function updateHistory() {
    historyDiv.innerHTML = "";

    history.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.textContent = item;
        historyDiv.appendChild(div);
    });
}
