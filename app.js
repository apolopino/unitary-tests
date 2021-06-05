var oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (usd) => {
    let eur = usd / oneEuroIs['USD']
    return eur * oneEuroIs['JPY'];
}

const fromEuroToDollar = (eur) => {
    return eur * oneEuroIs['USD'];
}

function fromYenToPound(yen) {
    let eur = yen / 127.9;
    return eur * oneEuroIs['GBP'];
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
