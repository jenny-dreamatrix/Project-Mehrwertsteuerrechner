
const outputMehrwert = document.querySelector(".output-mehrwert");
const outputBruttoNetto = document.querySelector(".output-brutto-netto");
const changeLabelInput = document.querySelector(".label-input");
const changeLabelOutput = document.querySelector(".label-output")



const changetext = () => {
    changeLabelInput.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
    changeLabelOutput.innerHTML = "Nettobetrag";
}

const resettext = () => {
    changeLabelInput.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro <span>*</span>";
    changeLabelOutput.innerHTML = "Bruttobetrag (Endpreis)";
}



const berechnen = () => {
    const aufschlagen = document.querySelector("#aufschlagen").checked;
    const neunzehnProzent = document.querySelector("#neunzehn-prozent").checked;
    const inputNumber = Number(document.querySelector("#input-number").value);

    console.log({aufschlagen}, {neunzehnProzent}, {inputNumber});
    
    if (aufschlagen == true && neunzehnProzent == true){
        let mehrwertSteuer = inputNumber*0.19;
        let brutto = inputNumber + mehrwertSteuer;

        console.log({mehrwertSteuer}, {brutto});
        
        mehrwertSteuer = String(mehrwertSteuer.toFixed(2));
        mehrwertSteuer = mehrwertSteuer.replace(".",",");
        outputMehrwert.innerHTML = mehrwertSteuer + " €";
         
        brutto = String(brutto.toFixed(2));
        brutto = brutto.replace(".", ",");
        outputBruttoNetto.innerHTML = brutto + " €";

    } else if (aufschlagen == true && neunzehnProzent == false) {
        let mehrwertSteuer = inputNumber*0.07;
        let brutto = inputNumber + mehrwertSteuer;

        console.log({mehrwertSteuer}, {brutto});
        
        mehrwertSteuer = String(mehrwertSteuer.toFixed(2));
        mehrwertSteuer = mehrwertSteuer.replace(".",",");
        outputMehrwert.innerHTML = mehrwertSteuer + " €";
        
        brutto = String(brutto.toFixed(2));
        brutto = brutto.replace(".", ",");
        outputBruttoNetto.innerHTML = brutto + " €";
    
    } else if (aufschlagen == false && neunzehnProzent == true){
        let netto = inputNumber / 1.19;
        let mehrwertSteuer = inputNumber - netto;

        console.log({netto}, {mehrwertSteuer});

        netto = String(netto.toFixed(2));
        netto = netto.replace(".", ",");
        outputBruttoNetto.innerHTML = netto + " €";

        mehrwertSteuer = String(mehrwertSteuer.toFixed(2));
        mehrwertSteuer = mehrwertSteuer.replace(".", ",");
        outputMehrwert.innerHTML = mehrwertSteuer + " €";

    } else {
        let netto = inputNumber / 1.07;
        let mehrwertSteuer = inputNumber - netto;

        console.log({netto}, {mehrwertSteuer});

        netto = String(netto.toFixed(2));
        netto = netto.replace(".", ",");
        outputBruttoNetto.innerHTML = netto + " €";

        mehrwertSteuer = String(mehrwertSteuer.toFixed(2));
        mehrwertSteuer = mehrwertSteuer.replace(".", ",");
        outputMehrwert.innerHTML = mehrwertSteuer + " €";
    }
}