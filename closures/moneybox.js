// function moneyBox (coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Money: ${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function money () {
    let savedCoins = 0;
    
    // funcion que recibira a los coins para recordarlos
    function save (coins) {
        savedCoins += coins;
        console.log(`MoneyBox: ${savedCoins}`)
    }
    return save;
}

const myMoneyBox = money();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(5);

const moneyBoxAna = money();

moneyBoxAna(7);
moneyBoxAna(7);
moneyBoxAna(7);

