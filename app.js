

// One euro is:
let unEuro = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
function DollarAYen (dolares) {
    let DAY = dolares/unEuro.USD * unEuro.JPY;
    return  (DAY.toFixed(2))

};
function EuroADollar (euros) {
    let EYD =  euros * unEuro.USD;
    return (EYD.toFixed(2))

};
function YenALibra (yenes) {
    let YYL = yenes/unEuro.JPY * unEuro.GBP;
    return  (YYL.toFixed(4))

};
// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { DollarAYen,EuroADollar,YenALibra };