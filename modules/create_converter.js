export default function convertValue(data) {
    
    const inputSell = document.querySelector('#sell input');
    const inputBuy = document.querySelector('#buy input');
    const selectSell = document.querySelector('#select_sell');
    const selectBuy = document.querySelector('#select_buy');

    inputSell.oninput = () => {

        //if the input data is in UAH
        if (selectSell.value === 'Украинская гривна') {

            if (selectBuy.value === 'Украинская гривна') {
                inputBuy.value = parseFloat(inputSell.value);
            } else if (selectBuy.value === 'Доллар США') {
                inputBuy.value = (parseFloat(inputSell.value) / data[0].sale).toFixed(2);
            } else if (selectBuy.value === 'Евро') {
                inputBuy.value = (parseFloat(inputSell.value) / data[1].sale).toFixed(2);
            } else if (selectBuy.value === 'Российский рубль') {
                inputBuy.value = (parseFloat(inputSell.value) / data[2].sale).toFixed(2);
            }
        }
        //if the input data is in USD
        if (selectSell.value === 'Доллар США') {

            if (selectBuy.value === 'Украинская гривна') {
                inputBuy.value = (parseFloat(inputSell.value) * data[0].buy).toFixed(2);
            } else if (selectBuy.value === 'Доллар США') {
                inputBuy.value = parseFloat(inputSell.value);
            } else if (selectBuy.value === 'Евро') {
                inputBuy.value = (parseFloat(inputSell.value) * ((data[0].buy * 100 / data[1].sale) / 100)).toFixed(2);
            } else if (selectBuy.value === 'Российский рубль') {
                inputBuy.value = (parseFloat(inputSell.value) * (data[0].buy / data[2].sale)).toFixed(2);
            }
        }
        //if the input data is in EUR
        if (selectSell.value === 'Евро') {

            if (selectBuy.value === 'Украинская гривна') {
                inputBuy.value = (parseFloat(inputSell.value) * data[1].buy).toFixed(2);
            } else if (selectBuy.value === 'Доллар США') {
                inputBuy.value = (parseFloat(inputSell.value) / ((data[0].buy * 100 / data[1].sale) / 100)).toFixed(2);
            } else if (selectBuy.value === 'Евро') {
                inputBuy.value = parseFloat(inputSell.value);
            } else if (selectBuy.value === 'Российский рубль') {
                inputBuy.value = (parseFloat(inputSell.value) * (data[1].buy / data[2].sale)).toFixed(2);
            }
        }
        //if the input data is in RUR
        if (selectSell.value === 'Российский рубль') {

            if (selectBuy.value === 'Украинская гривна') {
                inputBuy.value = (parseFloat(inputSell.value) * data[2].sale).toFixed(2);
            } else if (selectBuy.value === 'Доллар США') {
                inputBuy.value = (parseFloat(inputSell.value) / (data[0].sale / data[2].buy)).toFixed(2);
            } else if (selectBuy.value === 'Евро') {
                inputBuy.value = (parseFloat(inputSell.value) / (data[1].sale / data[2].buy)).toFixed(2);
            } else if (selectBuy.value === 'Российский рубль') {
                inputBuy.value = parseFloat(inputSell.value);
            }
        }
    }
}