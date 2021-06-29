import initElementConverter from './modules/init_element_converter.js';
import initElementCourse from './modules/init_element_course.js';
import createCourse from './modules/create_course.js';
import buttonBinding from './modules/button_binding.js';
import convertValue from './modules/create_converter.js';

getData();

async function getData() {
    const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    const data = await response.json();
    const result = await data;
    
    initElementConverter();
    initElementCourse();
    createCourse(result);
    buttonBinding(result);
    convertValue(result);
}