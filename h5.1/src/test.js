const weekNumber = (ts = Date.now()) => { 
  const passedDate = new Date(ts); 
  const sinceJan = new Date(passedDate.getFullYear(), 0, 1); 
  const week = Math.ceil((((passedDate - sinceJan) / 86400000) + sinceJan.getDay() - 1) / 7); 
  return (week < 10) ? `0${week}` : `${week}`; 
}; 
console.log(weekNumber()); 

const obj = {card_0: true, card_1: true, card_2: true};
const newObj = {...obj, ["card_1"]: !obj["card_1"]};
newObj;

const datesAreOnSameDay = (first, second) => {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

console.log(datesAreOnSameDay(new Date("2020-04-30"), new Date("2020-04-30")));