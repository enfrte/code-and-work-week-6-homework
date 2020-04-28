const vocab = [{id: 1, fi: "Kissa", en: "Cat"}, {id: 2, fi: "Koira", en: "Dog"}, {id: 3, fi: "Tee", en: "Tea"}, {id: 4, fi: "Kahvi", en: "Coffee"}, {id: 5, fi: "Talo", en: "House"}, {id: 6, fi: "Auto", en: "Car"}, {id: 7, fi: "Pallo", en: "Ball"}, {id: 8, fi: "Ovi", en: "Door"}];
//const randomVocab = vocab.sort(() => Math.random() - 0.5);
const cardArray = [];
vocab.forEach((currentValue, index, array) => {
  console.log(currentValue.id);
  cardArray.push({pairId: currentValue.id, fi: currentValue.fi});
  cardArray.push({pairId: currentValue.id, en: currentValue.en});
});

console.log(cardArray);
const randomCardArray = cardArray.sort(() => Math.random() - 0.5);
console.log(randomCardArray);
randomCardArray.map( 
  (val, i) => console.log("map", val.pairId, (val.hasOwnProperty("en") ? val.en : val.fi)) // pass in either finnish or english depending what key object has
)