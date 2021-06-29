export default function initElementCourse() {
    
    const h1 = document.createElement('h1');
    h1.textContent = 'НАЛИЧНЫЙ КУРС';

    const course = document.querySelector('#course');
    course.append(h1);

    const tableCourse = document.createElement('table');
    tableCourse.id = 'default-table-finance';
    const thead = document.createElement('thead');
    tableCourse.append(thead);
    course.append(tableCourse);

    const tbody = document.createElement('tbody');
    tableCourse.append(tbody);

    let arrayThead = ['Валюта', 'Покупка', 'Продажа'];

    let tr = document.createElement('tr');

    for (let i of arrayThead) {
        let th = document.createElement('th');
        th.innerHTML += i;
        tr.append(th);
    }
    thead.append(tr);
}