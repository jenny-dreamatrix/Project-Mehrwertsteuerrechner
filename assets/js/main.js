
const outputMehrwert = document.querySelector(".output-mehrwert");
const outputBruttoNetto = document.querySelector(".output-brutto-netto");
const changeLabelInput = document.querySelector(".label-input");
const changeLabelOutput = document.querySelector(".label-output")

const changetext = () => {
    changeLabelInput.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro <span>*</span>";
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
        let ergebnis = inputNumber + mehrwertSteuer;
        berechnenZweiterTeil(ergebnis, mehrwertSteuer);
    } else if (aufschlagen == true && neunzehnProzent == false) {
        let mehrwertSteuer = inputNumber*0.07;
        let ergebnis = inputNumber + mehrwertSteuer;
        berechnenZweiterTeil(ergebnis, mehrwertSteuer);
    } else if (aufschlagen == false && neunzehnProzent == true){
        let ergebnis = inputNumber / 1.19;
        let mehrwertSteuer = inputNumber - ergebnis;
        berechnenZweiterTeil(ergebnis, mehrwertSteuer);
    } else {
        let ergebnis = inputNumber / 1.07;
        let mehrwertSteuer = inputNumber - ergebnis;
        berechnenZweiterTeil(ergebnis, mehrwertSteuer);
    }
}

const berechnenZweiterTeil = (ergebnis, mehrwertSteuer) => {
    console.log({mehrwertSteuer}, {ergebnis});
        
    mehrwertSteuer = String(mehrwertSteuer.toFixed(2));
    mehrwertSteuer = mehrwertSteuer.replace(".",",");
    outputMehrwert.innerHTML = mehrwertSteuer + " €";
     
    ergebnis = String(ergebnis.toFixed(2));
    ergebnis = ergebnis.replace(".", ",");
    outputBruttoNetto.innerHTML = ergebnis + " €";
}