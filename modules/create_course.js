export default function createCourse(data) {

    const tbody = document.querySelector('tbody');

    let addValue = '';

    let arrayImg = [];

    arrayImg.push(`<img src="https://finance.liga.net/images/general/2017/04/10/20170410171521-2826.png?v=1520566345">`, `<img src=https://finance.liga.net/images/general/2017/04/10/20170410171252-6508.png?v=1520566350>`, `<img src=https://finance.liga.net/images/general/2017/04/10/20170410171253-9634.png?v=1520566350>`);

    for (let i = 0; i < 3; i++) {
        let item = data[i];
        let img = arrayImg[i];         

        let value = `<tr>
        <td>${img} <n>${item.ccy}</n></td>
        <td>${Number(item.buy).toFixed(2)}</td>
        <td>${Number(item.sale).toFixed(2)}</td>
        </tr>`;

        addValue += value;
    };
    tbody.innerHTML = addValue;
}