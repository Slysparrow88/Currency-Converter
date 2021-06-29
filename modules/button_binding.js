export default function buttonBinding(data) {

    const selectSell = document.querySelector('#select_sell');
    const selectBuy = document.querySelector('#select_buy');

    const arrayCurrency = ['Украинская гривна', 'Доллар США', 'Евро', 'Российский рубль'];

    function initListCurrency(container) {
        for (let i of arrayCurrency) {
            const option = document.createElement('option');
            option.innerHTML += i;
            container.append(option);
        }
    }
    new initListCurrency(selectSell);
    new initListCurrency(selectBuy);
}