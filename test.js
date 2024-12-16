// Importar la función sum del archivo app.js
const { DollarAYen,EuroADollar,YenALibra } = require('./app.js');

// Comienza tu primera prueba
test('un dolar debe dar 146.26 yenes', () => {
    

    expect(DollarAYen(1)).toBe("146.26");
});

test('un euro debe dar 1.07 dolares', () => {

    expect(EuroADollar(1)).toBe("1.07");
});

test('un yen debe dar 0.0055 libras', () => {

    expect(YenALibra(1)).toBe("0.0056");
});