export const getNDayBeforeToday = (n) => new Date(new Date().setDate(new Date().getDate() + n))
    .toLocaleDateString('en-GB');

const currentDate = new Date()
const fDate = new Date(currentDate.setDate(currentDate.getDate() +21));
const fDate2 = new Date(currentDate.setDate(currentDate.getDate() +30));
const fDate3 =  new Date(new Date().setFullYear(new Date().getFullYear() +1));
const yearFromNow = new Date(new Date().getFullYear() +1, new Date().getMonth(), new Date().getDate() -1).toLocaleDateString('en-GB');






//console.log(date.getDate() +1);
console.log(fDate);
console.log(fDate2);
console.log(fDate3);
console.log(yearFromNow);