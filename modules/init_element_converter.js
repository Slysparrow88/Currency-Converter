export default function initElementConverter() {
    const h1 = document.createElement('h1');
    h1.textContent = 'КОНВЕРТЕР ВАЛЮТ';

    const converter = document.querySelector('#converter');
    const converterMin = document.createElement('div');
    converterMin.id = 'converter-min';
    converter.append(h1);
    converter.append(converterMin);

    const sell = document.createElement('div');
    sell.id = "sell";
    sell.className = "convert";
    converterMin.append(sell);

    const buy = document.createElement('div');
    buy.id = "buy";
    buy.className = "convert";
    converterMin.append(buy);

    const inputSell = document.createElement('input');
    const selectSell = document.createElement('select');
    selectSell.id = 'select_sell';
    
    sell.append(selectSell);
    sell.append(inputSell);


    const inputBuy = document.createElement('input');
    const selectBuy = document.createElement('select');
    selectBuy.id = 'select_buy';
    
    buy.append(selectBuy);
    buy.append(inputBuy);
}