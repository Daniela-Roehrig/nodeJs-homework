import moment from "moment";

const now = moment();

const format1 = now.format('DD-MM-YYYY');
const format2 = now.format('MMM Do YY');
const format3 = now.format('dddd');

console.log('First format:', format1);
console.log('Second format:', format2);
console.log('Third format:', format3);